# `ec2VpcEndpointConnectionNotification` Submodule <a name="`ec2VpcEndpointConnectionNotification` Submodule" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcEndpointConnectionNotification <a name="Ec2VpcEndpointConnectionNotification" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification awscc_ec2_vpc_endpoint_connection_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotification;

Ec2VpcEndpointConnectionNotification.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionEvents(java.util.List<java.lang.String>)
    .connectionNotificationArn(java.lang.String)
//  .serviceId(java.lang.String)
//  .vpcEndpointId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionEvents">connectionEvents</a></code> | <code>java.util.List<java.lang.String></code> | The endpoint events for which to receive notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionNotificationArn">connectionNotificationArn</a></code> | <code>java.lang.String</code> | The ARN of the SNS topic for the notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | The ID of the endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionEvents"></a>

- *Type:* java.util.List<java.lang.String>

The endpoint events for which to receive notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events Ec2VpcEndpointConnectionNotification#connection_events}

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.connectionNotificationArn"></a>

- *Type:* java.lang.String

The ARN of the SNS topic for the notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn Ec2VpcEndpointConnectionNotification#connection_notification_arn}

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.serviceId"></a>

- *Type:* java.lang.String

The ID of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#service_id Ec2VpcEndpointConnectionNotification#service_id}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.Initializer.parameter.vpcEndpointId"></a>

- *Type:* java.lang.String

The ID of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id Ec2VpcEndpointConnectionNotification#vpc_endpoint_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId">resetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetServiceId` <a name="resetServiceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetServiceId"></a>

```java
public void resetServiceId()
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.resetVpcEndpointId"></a>

```java
public void resetVpcEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotification;

Ec2VpcEndpointConnectionNotification.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotification;

Ec2VpcEndpointConnectionNotification.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotification;

Ec2VpcEndpointConnectionNotification.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotification;

Ec2VpcEndpointConnectionNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2VpcEndpointConnectionNotification.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2VpcEndpointConnectionNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2VpcEndpointConnectionNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2VpcEndpointConnectionNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcEndpointConnectionNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId">vpcEndpointConnectionNotificationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput">connectionEventsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput">connectionNotificationArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput">serviceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents">connectionEvents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointConnectionNotificationId`<sup>Required</sup> <a name="vpcEndpointConnectionNotificationId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointConnectionNotificationId"></a>

```java
public java.lang.String getVpcEndpointConnectionNotificationId();
```

- *Type:* java.lang.String

---

##### `connectionEventsInput`<sup>Optional</sup> <a name="connectionEventsInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEventsInput"></a>

```java
public java.util.List<java.lang.String> getConnectionEventsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionNotificationArnInput`<sup>Optional</sup> <a name="connectionNotificationArnInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArnInput"></a>

```java
public java.lang.String getConnectionNotificationArnInput();
```

- *Type:* java.lang.String

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceIdInput"></a>

```java
public java.lang.String getServiceIdInput();
```

- *Type:* java.lang.String

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointIdInput"></a>

```java
public java.lang.String getVpcEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionEvents"></a>

```java
public java.util.List<java.lang.String> getConnectionEvents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.connectionNotificationArn"></a>

```java
public java.lang.String getConnectionNotificationArn();
```

- *Type:* java.lang.String

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotification.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcEndpointConnectionNotificationConfig <a name="Ec2VpcEndpointConnectionNotificationConfig" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_vpc_endpoint_connection_notification.Ec2VpcEndpointConnectionNotificationConfig;

Ec2VpcEndpointConnectionNotificationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionEvents(java.util.List<java.lang.String>)
    .connectionNotificationArn(java.lang.String)
//  .serviceId(java.lang.String)
//  .vpcEndpointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents">connectionEvents</a></code> | <code>java.util.List<java.lang.String></code> | The endpoint events for which to receive notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn">connectionNotificationArn</a></code> | <code>java.lang.String</code> | The ARN of the SNS topic for the notifications. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId">serviceId</a></code> | <code>java.lang.String</code> | The ID of the endpoint service. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId">vpcEndpointId</a></code> | <code>java.lang.String</code> | The ID of the endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionEvents`<sup>Required</sup> <a name="connectionEvents" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionEvents"></a>

```java
public java.util.List<java.lang.String> getConnectionEvents();
```

- *Type:* java.util.List<java.lang.String>

The endpoint events for which to receive notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_events Ec2VpcEndpointConnectionNotification#connection_events}

---

##### `connectionNotificationArn`<sup>Required</sup> <a name="connectionNotificationArn" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.connectionNotificationArn"></a>

```java
public java.lang.String getConnectionNotificationArn();
```

- *Type:* java.lang.String

The ARN of the SNS topic for the notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#connection_notification_arn Ec2VpcEndpointConnectionNotification#connection_notification_arn}

---

##### `serviceId`<sup>Optional</sup> <a name="serviceId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.serviceId"></a>

```java
public java.lang.String getServiceId();
```

- *Type:* java.lang.String

The ID of the endpoint service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#service_id Ec2VpcEndpointConnectionNotification#service_id}

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktn/provider-awscc.ec2VpcEndpointConnectionNotification.Ec2VpcEndpointConnectionNotificationConfig.property.vpcEndpointId"></a>

```java
public java.lang.String getVpcEndpointId();
```

- *Type:* java.lang.String

The ID of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_vpc_endpoint_connection_notification#vpc_endpoint_id Ec2VpcEndpointConnectionNotification#vpc_endpoint_id}

---



