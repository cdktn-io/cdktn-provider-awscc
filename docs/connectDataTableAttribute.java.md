# `connectDataTableAttribute` Submodule <a name="`connectDataTableAttribute` Submodule" id="@cdktn/provider-awscc.connectDataTableAttribute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableAttribute <a name="ConnectDataTableAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute awscc_connect_data_table_attribute}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttribute;

ConnectDataTableAttribute.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableArn(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .primary(java.lang.Boolean|IResolvable)
//  .validation(ConnectDataTableAttributeValidation)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.valueType">valueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.dataTableArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.instanceArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.valueType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.primary"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.Initializer.parameter.validation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation">putValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary">resetPrimary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putValidation` <a name="putValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation"></a>

```java
public void putValidation(ConnectDataTableAttributeValidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.putValidation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetPrimary` <a name="resetPrimary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetPrimary"></a>

```java
public void resetPrimary()
```

##### `resetValidation` <a name="resetValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.resetValidation"></a>

```java
public void resetValidation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttribute;

ConnectDataTableAttribute.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttribute;

ConnectDataTableAttribute.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttribute;

ConnectDataTableAttribute.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttribute;

ConnectDataTableAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ConnectDataTableAttribute.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ConnectDataTableAttribute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ConnectDataTableAttribute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ConnectDataTableAttribute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableAttribute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId">attributeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion">lastModifiedRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion">lockVersion</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput">dataTableArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput">instanceArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput">primaryInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput">validationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput">valueTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType">valueType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeId`<sup>Required</sup> <a name="attributeId" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.attributeId"></a>

```java
public java.lang.String getAttributeId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedRegion`<sup>Required</sup> <a name="lastModifiedRegion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedRegion"></a>

```java
public java.lang.String getLastModifiedRegion();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lastModifiedTime"></a>

```java
public java.lang.Number getLastModifiedTime();
```

- *Type:* java.lang.Number

---

##### `lockVersion`<sup>Required</sup> <a name="lockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.lockVersion"></a>

```java
public ConnectDataTableAttributeLockVersionOutputReference getLockVersion();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference">ConnectDataTableAttributeLockVersionOutputReference</a>

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validation"></a>

```java
public ConnectDataTableAttributeValidationOutputReference getValidation();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference">ConnectDataTableAttributeValidationOutputReference</a>

---

##### `dataTableArnInput`<sup>Optional</sup> <a name="dataTableArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArnInput"></a>

```java
public java.lang.String getDataTableArnInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArnInput"></a>

```java
public java.lang.String getInstanceArnInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryInput`<sup>Optional</sup> <a name="primaryInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primaryInput"></a>

```java
public java.lang.Boolean|IResolvable getPrimaryInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.validationInput"></a>

```java
public IResolvable|ConnectDataTableAttributeValidation getValidationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---

##### `valueTypeInput`<sup>Optional</sup> <a name="valueTypeInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueTypeInput"></a>

```java
public java.lang.String getValueTypeInput();
```

- *Type:* java.lang.String

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.dataTableArn"></a>

```java
public java.lang.String getDataTableArn();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttribute.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableAttributeConfig <a name="ConnectDataTableAttributeConfig" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeConfig;

ConnectDataTableAttributeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataTableArn(java.lang.String)
    .instanceArn(java.lang.String)
    .name(java.lang.String)
    .valueType(java.lang.String)
//  .description(java.lang.String)
//  .primary(java.lang.Boolean|IResolvable)
//  .validation(ConnectDataTableAttributeValidation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn">dataTableArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn">instanceArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType">valueType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary">primary</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation">validation</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataTableArn`<sup>Required</sup> <a name="dataTableArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.dataTableArn"></a>

```java
public java.lang.String getDataTableArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#data_table_arn ConnectDataTableAttribute#data_table_arn}.

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.instanceArn"></a>

```java
public java.lang.String getInstanceArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#instance_arn ConnectDataTableAttribute#instance_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#name ConnectDataTableAttribute#name}.

---

##### `valueType`<sup>Required</sup> <a name="valueType" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.valueType"></a>

```java
public java.lang.String getValueType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#value_type ConnectDataTableAttribute#value_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#description ConnectDataTableAttribute#description}.

---

##### `primary`<sup>Optional</sup> <a name="primary" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.primary"></a>

```java
public java.lang.Boolean|IResolvable getPrimary();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#primary ConnectDataTableAttribute#primary}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeConfig.property.validation"></a>

```java
public ConnectDataTableAttributeValidation getValidation();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#validation ConnectDataTableAttribute#validation}.

---

### ConnectDataTableAttributeLockVersion <a name="ConnectDataTableAttributeLockVersion" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeLockVersion;

ConnectDataTableAttributeLockVersion.builder()
    .build();
```


### ConnectDataTableAttributeValidation <a name="ConnectDataTableAttributeValidation" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeValidation;

ConnectDataTableAttributeValidation.builder()
//  .enum(ConnectDataTableAttributeValidationEnum)
//  .exclusiveMaximum(java.lang.Number)
//  .exclusiveMinimum(java.lang.Number)
//  .maximum(java.lang.Number)
//  .maxLength(java.lang.Number)
//  .maxValues(java.lang.Number)
//  .minimum(java.lang.Number)
//  .minLength(java.lang.Number)
//  .minValues(java.lang.Number)
//  .multipleOf(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum">exclusiveMaximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum">exclusiveMinimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues">maxValues</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues">minValues</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf">multipleOf</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}. |

---

##### `enum`<sup>Optional</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.enum"></a>

```java
public ConnectDataTableAttributeValidationEnum getEnum();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#enum ConnectDataTableAttribute#enum}.

---

##### `exclusiveMaximum`<sup>Optional</sup> <a name="exclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMaximum"></a>

```java
public java.lang.Number getExclusiveMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_maximum ConnectDataTableAttribute#exclusive_maximum}.

---

##### `exclusiveMinimum`<sup>Optional</sup> <a name="exclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.exclusiveMinimum"></a>

```java
public java.lang.Number getExclusiveMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#exclusive_minimum ConnectDataTableAttribute#exclusive_minimum}.

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#maximum ConnectDataTableAttribute#maximum}.

---

##### `maxLength`<sup>Optional</sup> <a name="maxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_length ConnectDataTableAttribute#max_length}.

---

##### `maxValues`<sup>Optional</sup> <a name="maxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.maxValues"></a>

```java
public java.lang.Number getMaxValues();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#max_values ConnectDataTableAttribute#max_values}.

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#minimum ConnectDataTableAttribute#minimum}.

---

##### `minLength`<sup>Optional</sup> <a name="minLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_length ConnectDataTableAttribute#min_length}.

---

##### `minValues`<sup>Optional</sup> <a name="minValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.minValues"></a>

```java
public java.lang.Number getMinValues();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#min_values ConnectDataTableAttribute#min_values}.

---

##### `multipleOf`<sup>Optional</sup> <a name="multipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation.property.multipleOf"></a>

```java
public java.lang.Number getMultipleOf();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#multiple_of ConnectDataTableAttribute#multiple_of}.

---

### ConnectDataTableAttributeValidationEnum <a name="ConnectDataTableAttributeValidationEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeValidationEnum;

ConnectDataTableAttributeValidationEnum.builder()
//  .strict(java.lang.Boolean|IResolvable)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict">strict</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}. |

---

##### `strict`<sup>Optional</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.strict"></a>

```java
public java.lang.Boolean|IResolvable getStrict();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#strict ConnectDataTableAttribute#strict}.

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/connect_data_table_attribute#values ConnectDataTableAttribute#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableAttributeLockVersionOutputReference <a name="ConnectDataTableAttributeLockVersionOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeLockVersionOutputReference;

new ConnectDataTableAttributeLockVersionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute">attribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable">dataTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attribute`<sup>Required</sup> <a name="attribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.attribute"></a>

```java
public java.lang.String getAttribute();
```

- *Type:* java.lang.String

---

##### `dataTable`<sup>Required</sup> <a name="dataTable" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.dataTable"></a>

```java
public java.lang.String getDataTable();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersionOutputReference.property.internalValue"></a>

```java
public ConnectDataTableAttributeLockVersion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeLockVersion">ConnectDataTableAttributeLockVersion</a>

---


### ConnectDataTableAttributeValidationEnumOutputReference <a name="ConnectDataTableAttributeValidationEnumOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeValidationEnumOutputReference;

new ConnectDataTableAttributeValidationEnumOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict">resetStrict</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStrict` <a name="resetStrict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetStrict"></a>

```java
public void resetStrict()
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput">strictInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict">strict</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `strictInput`<sup>Optional</sup> <a name="strictInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strictInput"></a>

```java
public java.lang.Boolean|IResolvable getStrictInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `strict`<sup>Required</sup> <a name="strict" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.strict"></a>

```java
public java.lang.Boolean|IResolvable getStrict();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectDataTableAttributeValidationEnum getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---


### ConnectDataTableAttributeValidationOutputReference <a name="ConnectDataTableAttributeValidationOutputReference" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.connect_data_table_attribute.ConnectDataTableAttributeValidationOutputReference;

new ConnectDataTableAttributeValidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum">putEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum">resetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum">resetExclusiveMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum">resetExclusiveMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength">resetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues">resetMaxValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength">resetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues">resetMinValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf">resetMultipleOf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnum` <a name="putEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum"></a>

```java
public void putEnum(ConnectDataTableAttributeValidationEnum value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `resetEnum` <a name="resetEnum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetEnum"></a>

```java
public void resetEnum()
```

##### `resetExclusiveMaximum` <a name="resetExclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMaximum"></a>

```java
public void resetExclusiveMaximum()
```

##### `resetExclusiveMinimum` <a name="resetExclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetExclusiveMinimum"></a>

```java
public void resetExclusiveMinimum()
```

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaximum"></a>

```java
public void resetMaximum()
```

##### `resetMaxLength` <a name="resetMaxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxLength"></a>

```java
public void resetMaxLength()
```

##### `resetMaxValues` <a name="resetMaxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMaxValues"></a>

```java
public void resetMaxValues()
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinimum"></a>

```java
public void resetMinimum()
```

##### `resetMinLength` <a name="resetMinLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinLength"></a>

```java
public void resetMinLength()
```

##### `resetMinValues` <a name="resetMinValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMinValues"></a>

```java
public void resetMinValues()
```

##### `resetMultipleOf` <a name="resetMultipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.resetMultipleOf"></a>

```java
public void resetMultipleOf()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum">enum</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput">enumInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput">exclusiveMaximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput">exclusiveMinimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput">maximumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput">maxLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput">maxValuesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput">minimumInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput">minLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput">minValuesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput">multipleOfInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum">exclusiveMaximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum">exclusiveMinimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum">maximum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength">maxLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues">maxValues</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum">minimum</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength">minLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues">minValues</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf">multipleOf</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enum`<sup>Required</sup> <a name="enum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enum"></a>

```java
public ConnectDataTableAttributeValidationEnumOutputReference getEnum();
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnumOutputReference">ConnectDataTableAttributeValidationEnumOutputReference</a>

---

##### `enumInput`<sup>Optional</sup> <a name="enumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.enumInput"></a>

```java
public IResolvable|ConnectDataTableAttributeValidationEnum getEnumInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationEnum">ConnectDataTableAttributeValidationEnum</a>

---

##### `exclusiveMaximumInput`<sup>Optional</sup> <a name="exclusiveMaximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximumInput"></a>

```java
public java.lang.Number getExclusiveMaximumInput();
```

- *Type:* java.lang.Number

---

##### `exclusiveMinimumInput`<sup>Optional</sup> <a name="exclusiveMinimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimumInput"></a>

```java
public java.lang.Number getExclusiveMinimumInput();
```

- *Type:* java.lang.Number

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximumInput"></a>

```java
public java.lang.Number getMaximumInput();
```

- *Type:* java.lang.Number

---

##### `maxLengthInput`<sup>Optional</sup> <a name="maxLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLengthInput"></a>

```java
public java.lang.Number getMaxLengthInput();
```

- *Type:* java.lang.Number

---

##### `maxValuesInput`<sup>Optional</sup> <a name="maxValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValuesInput"></a>

```java
public java.lang.Number getMaxValuesInput();
```

- *Type:* java.lang.Number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimumInput"></a>

```java
public java.lang.Number getMinimumInput();
```

- *Type:* java.lang.Number

---

##### `minLengthInput`<sup>Optional</sup> <a name="minLengthInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLengthInput"></a>

```java
public java.lang.Number getMinLengthInput();
```

- *Type:* java.lang.Number

---

##### `minValuesInput`<sup>Optional</sup> <a name="minValuesInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValuesInput"></a>

```java
public java.lang.Number getMinValuesInput();
```

- *Type:* java.lang.Number

---

##### `multipleOfInput`<sup>Optional</sup> <a name="multipleOfInput" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOfInput"></a>

```java
public java.lang.Number getMultipleOfInput();
```

- *Type:* java.lang.Number

---

##### `exclusiveMaximum`<sup>Required</sup> <a name="exclusiveMaximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMaximum"></a>

```java
public java.lang.Number getExclusiveMaximum();
```

- *Type:* java.lang.Number

---

##### `exclusiveMinimum`<sup>Required</sup> <a name="exclusiveMinimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.exclusiveMinimum"></a>

```java
public java.lang.Number getExclusiveMinimum();
```

- *Type:* java.lang.Number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maximum"></a>

```java
public java.lang.Number getMaximum();
```

- *Type:* java.lang.Number

---

##### `maxLength`<sup>Required</sup> <a name="maxLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxLength"></a>

```java
public java.lang.Number getMaxLength();
```

- *Type:* java.lang.Number

---

##### `maxValues`<sup>Required</sup> <a name="maxValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.maxValues"></a>

```java
public java.lang.Number getMaxValues();
```

- *Type:* java.lang.Number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minimum"></a>

```java
public java.lang.Number getMinimum();
```

- *Type:* java.lang.Number

---

##### `minLength`<sup>Required</sup> <a name="minLength" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minLength"></a>

```java
public java.lang.Number getMinLength();
```

- *Type:* java.lang.Number

---

##### `minValues`<sup>Required</sup> <a name="minValues" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.minValues"></a>

```java
public java.lang.Number getMinValues();
```

- *Type:* java.lang.Number

---

##### `multipleOf`<sup>Required</sup> <a name="multipleOf" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.multipleOf"></a>

```java
public java.lang.Number getMultipleOf();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidationOutputReference.property.internalValue"></a>

```java
public IResolvable|ConnectDataTableAttributeValidation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.connectDataTableAttribute.ConnectDataTableAttributeValidation">ConnectDataTableAttributeValidation</a>

---



