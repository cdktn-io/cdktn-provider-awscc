# `connectPredefinedAttribute` Submodule <a name="`connectPredefinedAttribute` Submodule" id="@cdktn/provider-awscc.connectPredefinedAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectPredefinedAttribute <a name="ConnectPredefinedAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute awscc_connect_predefined_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttribute;

ConnectPredefinedAttribute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .attributeConfiguration(ConnectPredefinedAttributeAttributeConfiguration)
//  .purposes(java.util.List<java.lang.String>)
//  .values(ConnectPredefinedAttributeValues)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.attributeConfiguration">attributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.purposes">purposes</a></code> | <code>java.util.List<java.lang.String></code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `attributeConfiguration`<sup>Optional</sup> <a name="attributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.attributeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `purposes`<sup>Optional</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.purposes"></a>

- *Type:* java.util.List<java.lang.String>

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.Initializer.parameter.values"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration">putAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues">putValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration">resetAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes">resetPurposes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues">resetValues</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeConfiguration` <a name="putAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration"></a>

```java
public void putAttributeConfiguration(ConnectPredefinedAttributeAttributeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putAttributeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `putValues` <a name="putValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues"></a>

```java
public void putValues(ConnectPredefinedAttributeValues value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.putValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `resetAttributeConfiguration` <a name="resetAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetAttributeConfiguration"></a>

```java
public void resetAttributeConfiguration()
```

##### `resetPurposes` <a name="resetPurposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetPurposes"></a>

```java
public void resetPurposes()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.resetValues"></a>

```java
public void resetValues()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttribute;

ConnectPredefinedAttribute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttribute;

ConnectPredefinedAttribute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttribute;

ConnectPredefinedAttribute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttribute;

ConnectPredefinedAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectPredefinedAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectPredefinedAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectPredefinedAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectPredefinedAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectPredefinedAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration">attributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput">attributeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput">purposesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput">valuesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes">purposes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeConfiguration`<sup>Required</sup> <a name="attributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfiguration"></a>

```java
public ConnectPredefinedAttributeAttributeConfigurationOutputReference getAttributeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference">ConnectPredefinedAttributeAttributeConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedRegion"></a>

```java
public java.lang.String getLastModifiedRegion();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.values"></a>

```java
public ConnectPredefinedAttributeValuesOutputReference getValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference">ConnectPredefinedAttributeValuesOutputReference</a>

---

##### `attributeConfigurationInput`<sup>Optional</sup> <a name="attributeConfigurationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.attributeConfigurationInput"></a>

```java
public IResolvable|ConnectPredefinedAttributeAttributeConfiguration getAttributeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `purposesInput`<sup>Optional</sup> <a name="purposesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposesInput"></a>

```java
public java.util.List<java.lang.String> getPurposesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.valuesInput"></a>

```java
public IResolvable|ConnectPredefinedAttributeValues getValuesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `purposes`<sup>Required</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.purposes"></a>

```java
public java.util.List<java.lang.String> getPurposes();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttribute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectPredefinedAttributeAttributeConfiguration <a name="ConnectPredefinedAttributeAttributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttributeAttributeConfiguration;

ConnectPredefinedAttributeAttributeConfiguration.builder()
//  .enableValueValidationOnAssociation(java.lang.Boolean|IResolvable)
//  .isReadOnly(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation">enableValueValidationOnAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enables customers to enforce strict validation on the specific values that this predefined attribute can hold. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Allows the predefined attribute to show up and be managed in the Amazon Connect UI. |

---

##### `enableValueValidationOnAssociation`<sup>Optional</sup> <a name="enableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.enableValueValidationOnAssociation"></a>

```java
public java.lang.Boolean|IResolvable getEnableValueValidationOnAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enables customers to enforce strict validation on the specific values that this predefined attribute can hold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#enable_value_validation_on_association ConnectPredefinedAttribute#enable_value_validation_on_association}

---

##### `isReadOnly`<sup>Optional</sup> <a name="isReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration.property.isReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getIsReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Allows the predefined attribute to show up and be managed in the Amazon Connect UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#is_read_only ConnectPredefinedAttribute#is_read_only}

---

### ConnectPredefinedAttributeConfig <a name="ConnectPredefinedAttributeConfig" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttributeConfig;

ConnectPredefinedAttributeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
//  .attributeConfiguration(ConnectPredefinedAttributeAttributeConfiguration)
//  .purposes(java.util.List<java.lang.String>)
//  .values(ConnectPredefinedAttributeValues)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | The identifier of the Amazon Connect instance. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration">attributeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes">purposes</a></code> | <code>java.util.List<java.lang.String></code> | The assigned purposes of the predefined attribute. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | The values of a predefined attribute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

The identifier of the Amazon Connect instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#instance_arn ConnectPredefinedAttribute#instance_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#name ConnectPredefinedAttribute#name}

---

##### `attributeConfiguration`<sup>Optional</sup> <a name="attributeConfiguration" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.attributeConfiguration"></a>

```java
public ConnectPredefinedAttributeAttributeConfiguration getAttributeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

Custom metadata associated to a Predefined attribute that controls how the attribute behaves when used by upstream services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#attribute_configuration ConnectPredefinedAttribute#attribute_configuration}

---

##### `purposes`<sup>Optional</sup> <a name="purposes" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.purposes"></a>

```java
public java.util.List<java.lang.String> getPurposes();
```

- *Type:* java.util.List<java.lang.String>

The assigned purposes of the predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#purposes ConnectPredefinedAttribute#purposes}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeConfig.property.values"></a>

```java
public ConnectPredefinedAttributeValues getValues();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

The values of a predefined attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#values ConnectPredefinedAttribute#values}

---

### ConnectPredefinedAttributeValues <a name="ConnectPredefinedAttributeValues" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttributeValues;

ConnectPredefinedAttributeValues.builder()
//  .stringList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList">stringList</a></code> | <code>java.util.List<java.lang.String></code> | Predefined attribute values of type string list. |

---

##### `stringList`<sup>Optional</sup> <a name="stringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues.property.stringList"></a>

```java
public java.util.List<java.lang.String> getStringList();
```

- *Type:* java.util.List<java.lang.String>

Predefined attribute values of type string list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_predefined_attribute#string_list ConnectPredefinedAttribute#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectPredefinedAttributeAttributeConfigurationOutputReference <a name="ConnectPredefinedAttributeAttributeConfigurationOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference;

new ConnectPredefinedAttributeAttributeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation">resetEnableValueValidationOnAssociation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly">resetIsReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableValueValidationOnAssociation` <a name="resetEnableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetEnableValueValidationOnAssociation"></a>

```java
public void resetEnableValueValidationOnAssociation()
```

##### `resetIsReadOnly` <a name="resetIsReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.resetIsReadOnly"></a>

```java
public void resetIsReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput">enableValueValidationOnAssociationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput">isReadOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation">enableValueValidationOnAssociation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableValueValidationOnAssociationInput`<sup>Optional</sup> <a name="enableValueValidationOnAssociationInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableValueValidationOnAssociationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isReadOnlyInput`<sup>Optional</sup> <a name="isReadOnlyInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getIsReadOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enableValueValidationOnAssociation`<sup>Required</sup> <a name="enableValueValidationOnAssociation" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.enableValueValidationOnAssociation"></a>

```java
public java.lang.Boolean|IResolvable getEnableValueValidationOnAssociation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.isReadOnly"></a>

```java
public java.lang.Boolean|IResolvable getIsReadOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectPredefinedAttributeAttributeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeAttributeConfiguration">ConnectPredefinedAttributeAttributeConfiguration</a>

---


### ConnectPredefinedAttributeValuesOutputReference <a name="ConnectPredefinedAttributeValuesOutputReference" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_predefined_attribute.ConnectPredefinedAttributeValuesOutputReference;

new ConnectPredefinedAttributeValuesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList">resetStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStringList` <a name="resetStringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.resetStringList"></a>

```java
public void resetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput">stringListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList">stringList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `stringListInput`<sup>Optional</sup> <a name="stringListInput" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringListInput"></a>

```java
public java.util.List<java.lang.String> getStringListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `stringList`<sup>Required</sup> <a name="stringList" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.stringList"></a>

```java
public java.util.List<java.lang.String> getStringList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValuesOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectPredefinedAttributeValues getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectPredefinedAttribute.ConnectPredefinedAttributeValues">ConnectPredefinedAttributeValues</a>

---



