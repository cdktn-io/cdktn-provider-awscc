# `dataAwsccElasticloadbalancingLoadBalancer` Submodule <a name="`dataAwsccElasticloadbalancingLoadBalancer` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingLoadBalancer <a name="DataAwsccElasticloadbalancingLoadBalancer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancing_load_balancer awscc_elasticloadbalancing_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancer;

DataAwsccElasticloadbalancingLoadBalancer.Builder.create(Construct scope, java.lang.String id)
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancing_load_balancer#id DataAwsccElasticloadbalancingLoadBalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancer;

DataAwsccElasticloadbalancingLoadBalancer.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancer;

DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancer;

DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancer;

DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingLoadBalancer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataAwsccElasticloadbalancingLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataAwsccElasticloadbalancingLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancing_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.accessLoggingPolicy">accessLoggingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy">appCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.availabilityZones">availabilityZones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName">canonicalHostedZoneName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId">canonicalHostedZoneNameId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy">connectionDrainingPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionSettings">connectionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.crossZone">crossZone</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference">DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy">lbCookieStickinessPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.listeners">listeners</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList">DataAwsccElasticloadbalancingLoadBalancerListenersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.loadBalancerName">loadBalancerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.sourceSecurityGroup">sourceSecurityGroup</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList">DataAwsccElasticloadbalancingLoadBalancerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessLoggingPolicy`<sup>Required</sup> <a name="accessLoggingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.accessLoggingPolicy"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference getAccessLoggingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference</a>

---

##### `appCookieStickinessPolicy`<sup>Required</sup> <a name="appCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.appCookieStickinessPolicy"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList getAppCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList</a>

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.availabilityZones"></a>

```java
public java.util.List<java.lang.String> getAvailabilityZones();
```

- *Type:* java.util.List<java.lang.String>

---

##### `canonicalHostedZoneName`<sup>Required</sup> <a name="canonicalHostedZoneName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneName"></a>

```java
public java.lang.String getCanonicalHostedZoneName();
```

- *Type:* java.lang.String

---

##### `canonicalHostedZoneNameId`<sup>Required</sup> <a name="canonicalHostedZoneNameId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.canonicalHostedZoneNameId"></a>

```java
public java.lang.String getCanonicalHostedZoneNameId();
```

- *Type:* java.lang.String

---

##### `connectionDrainingPolicy`<sup>Required</sup> <a name="connectionDrainingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionDrainingPolicy"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference getConnectionDrainingPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference</a>

---

##### `connectionSettings`<sup>Required</sup> <a name="connectionSettings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.connectionSettings"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference getConnectionSettings();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference">DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference</a>

---

##### `crossZone`<sup>Required</sup> <a name="crossZone" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.crossZone"></a>

```java
public IResolvable getCrossZone();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.healthCheck"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference">DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference</a>

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lbCookieStickinessPolicy`<sup>Required</sup> <a name="lbCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.lbCookieStickinessPolicy"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList getLbCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList</a>

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.listeners"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerListenersList getListeners();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList">DataAwsccElasticloadbalancingLoadBalancerListenersList</a>

---

##### `loadBalancerName`<sup>Required</sup> <a name="loadBalancerName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.loadBalancerName"></a>

```java
public java.lang.String getLoadBalancerName();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.policies"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesList</a>

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sourceSecurityGroup`<sup>Required</sup> <a name="sourceSecurityGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.sourceSecurityGroup"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference getSourceSecurityGroup();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tags"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList">DataAwsccElasticloadbalancingLoadBalancerTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy;

DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy;

DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerConfig <a name="DataAwsccElasticloadbalancingLoadBalancerConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerConfig;

DataAwsccElasticloadbalancingLoadBalancerConfig.builder()
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancing_load_balancer#id DataAwsccElasticloadbalancingLoadBalancer#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy;

DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerConnectionSettings <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionSettings" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings;

DataAwsccElasticloadbalancingLoadBalancerConnectionSettings.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerHealthCheck <a name="DataAwsccElasticloadbalancingLoadBalancerHealthCheck" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck;

DataAwsccElasticloadbalancingLoadBalancerHealthCheck.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy;

DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerListeners <a name="DataAwsccElasticloadbalancingLoadBalancerListeners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerListeners;

DataAwsccElasticloadbalancingLoadBalancerListeners.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerPolicies <a name="DataAwsccElasticloadbalancingLoadBalancerPolicies" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPolicies;

DataAwsccElasticloadbalancingLoadBalancerPolicies.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes;

DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup <a name="DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup;

DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup.builder()
    .build();
```


### DataAwsccElasticloadbalancingLoadBalancerTags <a name="DataAwsccElasticloadbalancingLoadBalancerTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerTags;

DataAwsccElasticloadbalancingLoadBalancerTags.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval">emitInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix">s3BucketPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emitInterval`<sup>Required</sup> <a name="emitInterval" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.emitInterval"></a>

```java
public java.lang.Number getEmitInterval();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3BucketPrefix`<sup>Required</sup> <a name="s3BucketPrefix" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.s3BucketPrefix"></a>

```java
public java.lang.String getS3BucketPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy">DataAwsccElasticloadbalancingLoadBalancerAccessLoggingPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList;

new DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerAppCookieStickinessPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy">DataAwsccElasticloadbalancingLoadBalancerConnectionDrainingPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings">DataAwsccElasticloadbalancingLoadBalancerConnectionSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettingsOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerConnectionSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerConnectionSettings">DataAwsccElasticloadbalancingLoadBalancerConnectionSettings</a>

---


### DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck">DataAwsccElasticloadbalancingLoadBalancerHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.String getHealthyThreshold();
```

- *Type:* java.lang.String

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.String getInterval();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.String getUnhealthyThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheckOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerHealthCheck">DataAwsccElasticloadbalancingLoadBalancerHealthCheck</a>

---


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList;

new DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```java
public java.lang.String getCookieExpirationPeriod();
```

- *Type:* java.lang.String

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy">DataAwsccElasticloadbalancingLoadBalancerLbCookieStickinessPolicy</a>

---


### DataAwsccElasticloadbalancingLoadBalancerListenersList <a name="DataAwsccElasticloadbalancingLoadBalancerListenersList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerListenersList;

new DataAwsccElasticloadbalancingLoadBalancerListenersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort">instancePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol">instanceProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort">loadBalancerPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames">policyNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId">sslCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners">DataAwsccElasticloadbalancingLoadBalancerListeners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instancePort`<sup>Required</sup> <a name="instancePort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instancePort"></a>

```java
public java.lang.String getInstancePort();
```

- *Type:* java.lang.String

---

##### `instanceProtocol`<sup>Required</sup> <a name="instanceProtocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.instanceProtocol"></a>

```java
public java.lang.String getInstanceProtocol();
```

- *Type:* java.lang.String

---

##### `loadBalancerPort`<sup>Required</sup> <a name="loadBalancerPort" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.loadBalancerPort"></a>

```java
public java.lang.String getLoadBalancerPort();
```

- *Type:* java.lang.String

---

##### `policyNames`<sup>Required</sup> <a name="policyNames" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.policyNames"></a>

```java
public java.util.List<java.lang.String> getPolicyNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `sslCertificateId`<sup>Required</sup> <a name="sslCertificateId" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.sslCertificateId"></a>

```java
public java.lang.String getSslCertificateId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListenersOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerListeners getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerListeners">DataAwsccElasticloadbalancingLoadBalancerListeners</a>

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList;

new DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributes</a>

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesList <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList;

new DataAwsccElasticloadbalancingLoadBalancerPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts">instancePorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts">loadBalancerPorts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName">policyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType">policyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies">DataAwsccElasticloadbalancingLoadBalancerPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.attributes"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList">DataAwsccElasticloadbalancingLoadBalancerPoliciesAttributesList</a>

---

##### `instancePorts`<sup>Required</sup> <a name="instancePorts" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.instancePorts"></a>

```java
public java.util.List<java.lang.String> getInstancePorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerPorts`<sup>Required</sup> <a name="loadBalancerPorts" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.loadBalancerPorts"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerPorts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyName`<sup>Required</sup> <a name="policyName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyName"></a>

```java
public java.lang.String getPolicyName();
```

- *Type:* java.lang.String

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.policyType"></a>

```java
public java.lang.String getPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPoliciesOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerPolicies getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerPolicies">DataAwsccElasticloadbalancingLoadBalancerPolicies</a>

---


### DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName">groupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias">ownerAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.groupName"></a>

```java
public java.lang.String getGroupName();
```

- *Type:* java.lang.String

---

##### `ownerAlias`<sup>Required</sup> <a name="ownerAlias" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.ownerAlias"></a>

```java
public java.lang.String getOwnerAlias();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroupOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup">DataAwsccElasticloadbalancingLoadBalancerSourceSecurityGroup</a>

---


### DataAwsccElasticloadbalancingLoadBalancerTagsList <a name="DataAwsccElasticloadbalancingLoadBalancerTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerTagsList;

new DataAwsccElasticloadbalancingLoadBalancerTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference <a name="DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.data_awscc_elasticloadbalancing_load_balancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference;

new DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags">DataAwsccElasticloadbalancingLoadBalancerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTagsOutputReference.property.internalValue"></a>

```java
public DataAwsccElasticloadbalancingLoadBalancerTags getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingLoadBalancer.DataAwsccElasticloadbalancingLoadBalancerTags">DataAwsccElasticloadbalancingLoadBalancerTags</a>

---



