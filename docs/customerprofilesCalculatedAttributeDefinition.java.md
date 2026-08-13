# `customerprofilesCalculatedAttributeDefinition` Submodule <a name="`customerprofilesCalculatedAttributeDefinition` Submodule" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesCalculatedAttributeDefinition <a name="CustomerprofilesCalculatedAttributeDefinition" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition awscc_customerprofiles_calculated_attribute_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinition;

CustomerprofilesCalculatedAttributeDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attributeDetails(CustomerprofilesCalculatedAttributeDefinitionAttributeDetails)
    .calculatedAttributeName(java.lang.String)
    .domainName(java.lang.String)
    .statistic(java.lang.String)
//  .conditions(CustomerprofilesCalculatedAttributeDefinitionConditions)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags>)
//  .useHistoricalData(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.attributeDetails">attributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.calculatedAttributeName">calculatedAttributeName</a></code> | <code>java.lang.String</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.statistic">statistic</a></code> | <code>java.lang.String</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.useHistoricalData">useHistoricalData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use historical data for the calculated attribute. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeDetails`<sup>Required</sup> <a name="attributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.attributeDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.calculatedAttributeName"></a>

- *Type:* java.lang.String

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.statistic"></a>

- *Type:* java.lang.String

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.conditions"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `useHistoricalData`<sup>Optional</sup> <a name="useHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.Initializer.parameter.useHistoricalData"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails">putAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData">resetUseHistoricalData</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAttributeDetails` <a name="putAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails"></a>

```java
public void putAttributeDetails(CustomerprofilesCalculatedAttributeDefinitionAttributeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putAttributeDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions"></a>

```java
public void putConditions(CustomerprofilesCalculatedAttributeDefinitionConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>>

---

##### `resetConditions` <a name="resetConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetConditions"></a>

```java
public void resetConditions()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetTags"></a>

```java
public void resetTags()
```

##### `resetUseHistoricalData` <a name="resetUseHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.resetUseHistoricalData"></a>

```java
public void resetUseHistoricalData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinition;

CustomerprofilesCalculatedAttributeDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinition;

CustomerprofilesCalculatedAttributeDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinition;

CustomerprofilesCalculatedAttributeDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinition;

CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CustomerprofilesCalculatedAttributeDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesCalculatedAttributeDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesCalculatedAttributeDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesCalculatedAttributeDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails">attributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt">lastUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness">readiness</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput">attributeDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput">calculatedAttributeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput">statisticInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput">useHistoricalDataInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName">calculatedAttributeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic">statistic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData">useHistoricalData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeDetails`<sup>Required</sup> <a name="attributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetails"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference getAttributeDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditions"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastUpdatedAt`<sup>Required</sup> <a name="lastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.lastUpdatedAt"></a>

```java
public java.lang.String getLastUpdatedAt();
```

- *Type:* java.lang.String

---

##### `readiness`<sup>Required</sup> <a name="readiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.readiness"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference getReadiness();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference">CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tags"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList">CustomerprofilesCalculatedAttributeDefinitionTagsList</a>

---

##### `attributeDetailsInput`<sup>Optional</sup> <a name="attributeDetailsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.attributeDetailsInput"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetails getAttributeDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---

##### `calculatedAttributeNameInput`<sup>Optional</sup> <a name="calculatedAttributeNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeNameInput"></a>

```java
public java.lang.String getCalculatedAttributeNameInput();
```

- *Type:* java.lang.String

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.conditionsInput"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditions getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `statisticInput`<sup>Optional</sup> <a name="statisticInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statisticInput"></a>

```java
public java.lang.String getStatisticInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tagsInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>>

---

##### `useHistoricalDataInput`<sup>Optional</sup> <a name="useHistoricalDataInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalDataInput"></a>

```java
public java.lang.Boolean|IResolvable getUseHistoricalDataInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.calculatedAttributeName"></a>

```java
public java.lang.String getCalculatedAttributeName();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

---

##### `useHistoricalData`<sup>Required</sup> <a name="useHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.useHistoricalData"></a>

```java
public java.lang.Boolean|IResolvable getUseHistoricalData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetails <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails;

CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.builder()
    .attributes(IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes>)
    .expression(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes">attributes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>></code> | A list of attribute items specified in the mathematical expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression">expression</a></code> | <code>java.lang.String</code> | Mathematical expression that is performed on attribute items provided in the attribute list. |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.attributes"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes> getAttributes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>>

A list of attribute items specified in the mathematical expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attributes CustomerprofilesCalculatedAttributeDefinition#attributes}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Mathematical expression that is performed on attribute items provided in the attribute list.

Each element in the expression should follow the structure of "{ObjectTypeName.AttributeName}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#expression CustomerprofilesCalculatedAttributeDefinition#expression}

---

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes;

CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name">name</a></code> | <code>java.lang.String</code> | The name of an attribute defined in a profile object type. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of an attribute defined in a profile object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#name CustomerprofilesCalculatedAttributeDefinition#name}

---

### CustomerprofilesCalculatedAttributeDefinitionConditions <a name="CustomerprofilesCalculatedAttributeDefinitionConditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditions;

CustomerprofilesCalculatedAttributeDefinitionConditions.builder()
//  .objectCount(java.lang.Number)
//  .range(CustomerprofilesCalculatedAttributeDefinitionConditionsRange)
//  .threshold(CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount">objectCount</a></code> | <code>java.lang.Number</code> | The number of profile objects used for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | The relative time period over which data is included in the aggregation. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | The threshold for the calculated attribute. |

---

##### `objectCount`<sup>Optional</sup> <a name="objectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.objectCount"></a>

```java
public java.lang.Number getObjectCount();
```

- *Type:* java.lang.Number

The number of profile objects used for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#object_count CustomerprofilesCalculatedAttributeDefinition#object_count}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.range"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsRange getRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

The relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#range CustomerprofilesCalculatedAttributeDefinition#range}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions.property.threshold"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold getThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

The threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#threshold CustomerprofilesCalculatedAttributeDefinition#threshold}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange;

CustomerprofilesCalculatedAttributeDefinitionConditionsRange.builder()
//  .timestampFormat(java.lang.String)
//  .timestampSource(java.lang.String)
//  .unit(java.lang.String)
//  .value(java.lang.Number)
//  .valueRange(CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | The format the timestamp field in your JSON object is specified. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource">timestampSource</a></code> | <code>java.lang.String</code> | An expression specifying the field in your JSON object from which the date should be parsed. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value">value</a></code> | <code>java.lang.Number</code> | The amount of time of the specified unit. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | A structure specifying the endpoints of the relative time period over which data is included in the aggregation. |

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

The format the timestamp field in your JSON object is specified.

This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_format CustomerprofilesCalculatedAttributeDefinition#timestamp_format}

---

##### `timestampSource`<sup>Optional</sup> <a name="timestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.timestampSource"></a>

```java
public java.lang.String getTimestampSource();
```

- *Type:* java.lang.String

An expression specifying the field in your JSON object from which the date should be parsed.

The expression should follow the structure of "{ObjectTypeName.<Location of timestamp field in JSON pointer format>}". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#timestamp_source CustomerprofilesCalculatedAttributeDefinition#timestamp_source}

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#unit CustomerprofilesCalculatedAttributeDefinition#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

##### `valueRange`<sup>Optional</sup> <a name="valueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange.property.valueRange"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange getValueRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

A structure specifying the endpoints of the relative time period over which data is included in the aggregation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value_range CustomerprofilesCalculatedAttributeDefinition#value_range}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange;

CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.builder()
//  .end(java.lang.Number)
//  .start(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end">end</a></code> | <code>java.lang.Number</code> | The ending point for this range. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start">start</a></code> | <code>java.lang.Number</code> | The starting point for this range. |

---

##### `end`<sup>Optional</sup> <a name="end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

The ending point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#end CustomerprofilesCalculatedAttributeDefinition#end}

---

##### `start`<sup>Optional</sup> <a name="start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

The starting point for this range.

Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#start CustomerprofilesCalculatedAttributeDefinition#start}

---

### CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold;

CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.builder()
//  .operator(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator">operator</a></code> | <code>java.lang.String</code> | The operator of the threshold. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value">value</a></code> | <code>java.lang.String</code> | The value of the threshold. |

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

The operator of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#operator CustomerprofilesCalculatedAttributeDefinition#operator}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

### CustomerprofilesCalculatedAttributeDefinitionConfig <a name="CustomerprofilesCalculatedAttributeDefinitionConfig" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConfig;

CustomerprofilesCalculatedAttributeDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .attributeDetails(CustomerprofilesCalculatedAttributeDefinitionAttributeDetails)
    .calculatedAttributeName(java.lang.String)
    .domainName(java.lang.String)
    .statistic(java.lang.String)
//  .conditions(CustomerprofilesCalculatedAttributeDefinitionConditions)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .tags(IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags>)
//  .useHistoricalData(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails">attributeDetails</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | Mathematical expression and a list of attribute items specified in that expression. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName">calculatedAttributeName</a></code> | <code>java.lang.String</code> | The unique name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic">statistic</a></code> | <code>java.lang.String</code> | The aggregation operation to perform for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | The conditions including range, object count, and threshold for the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name of the calculated attribute. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>></code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData">useHistoricalData</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to use historical data for the calculated attribute. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `attributeDetails`<sup>Required</sup> <a name="attributeDetails" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.attributeDetails"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetails getAttributeDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

Mathematical expression and a list of attribute items specified in that expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#attribute_details CustomerprofilesCalculatedAttributeDefinition#attribute_details}

---

##### `calculatedAttributeName`<sup>Required</sup> <a name="calculatedAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.calculatedAttributeName"></a>

```java
public java.lang.String getCalculatedAttributeName();
```

- *Type:* java.lang.String

The unique name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#calculated_attribute_name CustomerprofilesCalculatedAttributeDefinition#calculated_attribute_name}

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#domain_name CustomerprofilesCalculatedAttributeDefinition#domain_name}

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.statistic"></a>

```java
public java.lang.String getStatistic();
```

- *Type:* java.lang.String

The aggregation operation to perform for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#statistic CustomerprofilesCalculatedAttributeDefinition#statistic}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.conditions"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditions getConditions();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

The conditions including range, object count, and threshold for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#conditions CustomerprofilesCalculatedAttributeDefinition#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#description CustomerprofilesCalculatedAttributeDefinition#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name of the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#display_name CustomerprofilesCalculatedAttributeDefinition#display_name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.tags"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#tags CustomerprofilesCalculatedAttributeDefinition#tags}

---

##### `useHistoricalData`<sup>Optional</sup> <a name="useHistoricalData" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConfig.property.useHistoricalData"></a>

```java
public java.lang.Boolean|IResolvable getUseHistoricalData();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to use historical data for the calculated attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#use_historical_data CustomerprofilesCalculatedAttributeDefinition#use_historical_data}

---

### CustomerprofilesCalculatedAttributeDefinitionReadiness <a name="CustomerprofilesCalculatedAttributeDefinitionReadiness" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionReadiness;

CustomerprofilesCalculatedAttributeDefinitionReadiness.builder()
    .build();
```


### CustomerprofilesCalculatedAttributeDefinitionTags <a name="CustomerprofilesCalculatedAttributeDefinitionTags" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionTags;

CustomerprofilesCalculatedAttributeDefinitionTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#key CustomerprofilesCalculatedAttributeDefinition#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/customerprofiles_calculated_attribute_definition#value CustomerprofilesCalculatedAttributeDefinition#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>>

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>

---


### CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes"></a>

```java
public void putAttributes(IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.putAttributes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput">attributesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributes"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList getAttributes();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributesList</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.attributesInput"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes> getAttributesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes">CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsAttributes</a>>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionAttributeDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionAttributeDetails">CustomerprofilesCalculatedAttributeDefinitionAttributeDetails</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange">putRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold">putThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount">resetObjectCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRange` <a name="putRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange"></a>

```java
public void putRange(CustomerprofilesCalculatedAttributeDefinitionConditionsRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `putThreshold` <a name="putThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold"></a>

```java
public void putThreshold(CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `resetObjectCount` <a name="resetObjectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetObjectCount"></a>

```java
public void resetObjectCount()
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetRange"></a>

```java
public void resetRange()
```

##### `resetThreshold` <a name="resetThreshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range">range</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold">threshold</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput">objectCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput">rangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount">objectCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.range"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference getRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.threshold"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference getThreshold();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference</a>

---

##### `objectCountInput`<sup>Optional</sup> <a name="objectCountInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCountInput"></a>

```java
public java.lang.Number getObjectCountInput();
```

- *Type:* java.lang.Number

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.rangeInput"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRange getRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.thresholdInput"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold getThresholdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---

##### `objectCount`<sup>Required</sup> <a name="objectCount" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.objectCount"></a>

```java
public java.lang.Number getObjectCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditions">CustomerprofilesCalculatedAttributeDefinitionConditions</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange">putValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource">resetTimestampSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange">resetValueRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueRange` <a name="putValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange"></a>

```java
public void putValueRange(CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.putValueRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetTimestampSource` <a name="resetTimestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetTimestampSource"></a>

```java
public void resetTimestampSource()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueRange` <a name="resetValueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.resetValueRange"></a>

```java
public void resetValueRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange">valueRange</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput">timestampSourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput">valueRangeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource">timestampSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `valueRange`<sup>Required</sup> <a name="valueRange" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRange"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference getValueRange();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference</a>

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampSourceInput`<sup>Optional</sup> <a name="timestampSourceInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSourceInput"></a>

```java
public java.lang.String getTimestampSourceInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `valueRangeInput`<sup>Optional</sup> <a name="valueRangeInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.valueRangeInput"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange getValueRangeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `timestampSource`<sup>Required</sup> <a name="timestampSource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.timestampSource"></a>

```java
public java.lang.String getTimestampSource();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd">resetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart">resetStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnd` <a name="resetEnd" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetEnd"></a>

```java
public void resetEnd()
```

##### `resetStart` <a name="resetStart" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.resetStart"></a>

```java
public void resetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput">endInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput">startInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end">end</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start">start</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endInput`<sup>Optional</sup> <a name="endInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.endInput"></a>

```java
public java.lang.Number getEndInput();
```

- *Type:* java.lang.Number

---

##### `startInput`<sup>Optional</sup> <a name="startInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.startInput"></a>

```java
public java.lang.Number getStartInput();
```

- *Type:* java.lang.Number

---

##### `end`<sup>Required</sup> <a name="end" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.end"></a>

```java
public java.lang.Number getEnd();
```

- *Type:* java.lang.Number

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.start"></a>

```java
public java.lang.Number getStart();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRangeOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange">CustomerprofilesCalculatedAttributeDefinitionConditionsRangeValueRange</a>

---


### CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperator` <a name="resetOperator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThresholdOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold">CustomerprofilesCalculatedAttributeDefinitionConditionsThreshold</a>

---


### CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage">progressPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `progressPercentage`<sup>Required</sup> <a name="progressPercentage" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.progressPercentage"></a>

```java
public java.lang.Number getProgressPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadinessOutputReference.property.internalValue"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionReadiness getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionReadiness">CustomerprofilesCalculatedAttributeDefinitionReadiness</a>

---


### CustomerprofilesCalculatedAttributeDefinitionTagsList <a name="CustomerprofilesCalculatedAttributeDefinitionTagsList" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionTagsList;

new CustomerprofilesCalculatedAttributeDefinitionTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get"></a>

```java
public CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CustomerprofilesCalculatedAttributeDefinitionTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>>

---


### CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference <a name="CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.customerprofiles_calculated_attribute_definition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference;

new CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|CustomerprofilesCalculatedAttributeDefinitionTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesCalculatedAttributeDefinition.CustomerprofilesCalculatedAttributeDefinitionTags">CustomerprofilesCalculatedAttributeDefinitionTags</a>

---



