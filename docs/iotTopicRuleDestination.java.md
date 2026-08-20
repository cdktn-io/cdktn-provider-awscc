# `iotTopicRuleDestination` Submodule <a name="`iotTopicRuleDestination` Submodule" id="@cdktn/provider-awscc.iotTopicRuleDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRuleDestination <a name="IotTopicRuleDestination" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination awscc_iot_topic_rule_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestination;

IotTopicRuleDestination.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .httpUrlProperties(IotTopicRuleDestinationHttpUrlProperties)
//  .status(java.lang.String)
//  .vpcProperties(IotTopicRuleDestinationVpcProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpUrlProperties`<sup>Optional</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.httpUrlProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.status"></a>

- *Type:* java.lang.String

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `vpcProperties`<sup>Optional</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.Initializer.parameter.vpcProperties"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties">putHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties">putVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties">resetHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties">resetVpcProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHttpUrlProperties` <a name="putHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties"></a>

```java
public void putHttpUrlProperties(IotTopicRuleDestinationHttpUrlProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putHttpUrlProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `putVpcProperties` <a name="putVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties"></a>

```java
public void putVpcProperties(IotTopicRuleDestinationVpcProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.putVpcProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `resetHttpUrlProperties` <a name="resetHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetHttpUrlProperties"></a>

```java
public void resetHttpUrlProperties()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetVpcProperties` <a name="resetVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.resetVpcProperties"></a>

```java
public void resetVpcProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestination;

IotTopicRuleDestination.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestination;

IotTopicRuleDestination.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestination;

IotTopicRuleDestination.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestination;

IotTopicRuleDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotTopicRuleDestination.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotTopicRuleDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotTopicRuleDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotTopicRuleDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotTopicRuleDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason">statusReason</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput">httpUrlPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput">vpcPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `httpUrlProperties`<sup>Required</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlProperties"></a>

```java
public IotTopicRuleDestinationHttpUrlPropertiesOutputReference getHttpUrlProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference">IotTopicRuleDestinationHttpUrlPropertiesOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusReason"></a>

```java
public java.lang.String getStatusReason();
```

- *Type:* java.lang.String

---

##### `vpcProperties`<sup>Required</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcProperties"></a>

```java
public IotTopicRuleDestinationVpcPropertiesOutputReference getVpcProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference">IotTopicRuleDestinationVpcPropertiesOutputReference</a>

---

##### `httpUrlPropertiesInput`<sup>Optional</sup> <a name="httpUrlPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.httpUrlPropertiesInput"></a>

```java
public IResolvable|IotTopicRuleDestinationHttpUrlProperties getHttpUrlPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `vpcPropertiesInput`<sup>Optional</sup> <a name="vpcPropertiesInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.vpcPropertiesInput"></a>

```java
public IResolvable|IotTopicRuleDestinationVpcProperties getVpcPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestination.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleDestinationConfig <a name="IotTopicRuleDestinationConfig" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestinationConfig;

IotTopicRuleDestinationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .httpUrlProperties(IotTopicRuleDestinationHttpUrlProperties)
//  .status(java.lang.String)
//  .vpcProperties(IotTopicRuleDestinationVpcProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties">httpUrlProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | HTTP URL destination properties. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status">status</a></code> | <code>java.lang.String</code> | The status of the TopicRuleDestination. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties">vpcProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | VPC destination properties. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `httpUrlProperties`<sup>Optional</sup> <a name="httpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.httpUrlProperties"></a>

```java
public IotTopicRuleDestinationHttpUrlProperties getHttpUrlProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

HTTP URL destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#http_url_properties IotTopicRuleDestination#http_url_properties}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The status of the TopicRuleDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#status IotTopicRuleDestination#status}

---

##### `vpcProperties`<sup>Optional</sup> <a name="vpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationConfig.property.vpcProperties"></a>

```java
public IotTopicRuleDestinationVpcProperties getVpcProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

VPC destination properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_properties IotTopicRuleDestination#vpc_properties}

---

### IotTopicRuleDestinationHttpUrlProperties <a name="IotTopicRuleDestinationHttpUrlProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestinationHttpUrlProperties;

IotTopicRuleDestinationHttpUrlProperties.builder()
//  .confirmationUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl">confirmationUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}. |

---

##### `confirmationUrl`<sup>Optional</sup> <a name="confirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties.property.confirmationUrl"></a>

```java
public java.lang.String getConfirmationUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#confirmation_url IotTopicRuleDestination#confirmation_url}.

---

### IotTopicRuleDestinationVpcProperties <a name="IotTopicRuleDestinationVpcProperties" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestinationVpcProperties;

IotTopicRuleDestinationVpcProperties.builder()
//  .roleArn(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
//  .vpcId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}. |

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#role_arn IotTopicRuleDestination#role_arn}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#security_groups IotTopicRuleDestination#security_groups}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#subnet_ids IotTopicRuleDestination#subnet_ids}.

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iot_topic_rule_destination#vpc_id IotTopicRuleDestination#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleDestinationHttpUrlPropertiesOutputReference <a name="IotTopicRuleDestinationHttpUrlPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference;

new IotTopicRuleDestinationHttpUrlPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl">resetConfirmationUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfirmationUrl` <a name="resetConfirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.resetConfirmationUrl"></a>

```java
public void resetConfirmationUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput">confirmationUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl">confirmationUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `confirmationUrlInput`<sup>Optional</sup> <a name="confirmationUrlInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrlInput"></a>

```java
public java.lang.String getConfirmationUrlInput();
```

- *Type:* java.lang.String

---

##### `confirmationUrl`<sup>Required</sup> <a name="confirmationUrl" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.confirmationUrl"></a>

```java
public java.lang.String getConfirmationUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotTopicRuleDestinationHttpUrlProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationHttpUrlProperties">IotTopicRuleDestinationHttpUrlProperties</a>

---


### IotTopicRuleDestinationVpcPropertiesOutputReference <a name="IotTopicRuleDestinationVpcPropertiesOutputReference" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iot_topic_rule_destination.IotTopicRuleDestinationVpcPropertiesOutputReference;

new IotTopicRuleDestinationVpcPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.resetVpcId"></a>

```java
public void resetVpcId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId">vpcId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcIdInput"></a>

```java
public java.lang.String getVpcIdInput();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.vpcId"></a>

```java
public java.lang.String getVpcId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|IotTopicRuleDestinationVpcProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotTopicRuleDestination.IotTopicRuleDestinationVpcProperties">IotTopicRuleDestinationVpcProperties</a>

---



