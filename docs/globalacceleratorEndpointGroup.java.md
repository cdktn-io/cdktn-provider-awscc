# `globalacceleratorEndpointGroup` Submodule <a name="`globalacceleratorEndpointGroup` Submodule" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalacceleratorEndpointGroup <a name="GlobalacceleratorEndpointGroup" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group awscc_globalaccelerator_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointGroupRegion(java.lang.String)
    .listenerArn(java.lang.String)
//  .endpointConfigurations(IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations>)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.Number)
//  .healthCheckProtocol(java.lang.String)
//  .portOverrides(IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides>)
//  .thresholdCount(java.lang.Number)
//  .trafficDialPercentage(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | The name of the AWS Region where the endpoint group is located. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfigurations">endpointConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>></code> | The list of endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | The time in seconds between each health check for an endpoint. Must be a value of 10 or 30. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverrides">portOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health checks required to set the state of the endpoint to unhealthy. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic to sent to an AWS Region. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointGroupRegion"></a>

- *Type:* java.lang.String

The name of the AWS Region where the endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.listenerArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}

---

##### `endpointConfigurations`<sup>Optional</sup> <a name="endpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.endpointConfigurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>>

The list of endpoint objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckIntervalSeconds"></a>

- *Type:* java.lang.Number

The time in seconds between each health check for an endpoint. Must be a value of 10 or 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckPort"></a>

- *Type:* java.lang.Number

The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.healthCheckProtocol"></a>

- *Type:* java.lang.String

The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}

---

##### `portOverrides`<sup>Optional</sup> <a name="portOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.portOverrides"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}.

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.thresholdCount"></a>

- *Type:* java.lang.Number

The number of consecutive health checks required to set the state of the endpoint to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="trafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.Initializer.parameter.trafficDialPercentage"></a>

- *Type:* java.lang.Number

The percentage of traffic to sent to an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations">putEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides">putPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations">resetEndpointConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds">resetHealthCheckIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath">resetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort">resetHealthCheckPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol">resetHealthCheckProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides">resetPortOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount">resetThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage">resetTrafficDialPercentage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointConfigurations` <a name="putEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations"></a>

```java
public void putEndpointConfigurations(IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putEndpointConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>>

---

##### `putPortOverrides` <a name="putPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides"></a>

```java
public void putPortOverrides(IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.putPortOverrides.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>>

---

##### `resetEndpointConfigurations` <a name="resetEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetEndpointConfigurations"></a>

```java
public void resetEndpointConfigurations()
```

##### `resetHealthCheckIntervalSeconds` <a name="resetHealthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckIntervalSeconds"></a>

```java
public void resetHealthCheckIntervalSeconds()
```

##### `resetHealthCheckPath` <a name="resetHealthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPath"></a>

```java
public void resetHealthCheckPath()
```

##### `resetHealthCheckPort` <a name="resetHealthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckPort"></a>

```java
public void resetHealthCheckPort()
```

##### `resetHealthCheckProtocol` <a name="resetHealthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetHealthCheckProtocol"></a>

```java
public void resetHealthCheckProtocol()
```

##### `resetPortOverrides` <a name="resetPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetPortOverrides"></a>

```java
public void resetPortOverrides()
```

##### `resetThresholdCount` <a name="resetThresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetThresholdCount"></a>

```java
public void resetThresholdCount()
```

##### `resetTrafficDialPercentage` <a name="resetTrafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.resetTrafficDialPercentage"></a>

```java
public void resetTrafficDialPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroup;

GlobalacceleratorEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GlobalacceleratorEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GlobalacceleratorEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GlobalacceleratorEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GlobalacceleratorEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GlobalacceleratorEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations">endpointConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn">endpointGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides">portOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput">endpointConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput">endpointGroupRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput">healthCheckIntervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput">healthCheckPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput">healthCheckPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput">healthCheckProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput">listenerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput">portOverridesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput">thresholdCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput">trafficDialPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointConfigurations`<sup>Required</sup> <a name="endpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurations"></a>

```java
public GlobalacceleratorEndpointGroupEndpointConfigurationsList getEndpointConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList">GlobalacceleratorEndpointGroupEndpointConfigurationsList</a>

---

##### `endpointGroupArn`<sup>Required</sup> <a name="endpointGroupArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupArn"></a>

```java
public java.lang.String getEndpointGroupArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `portOverrides`<sup>Required</sup> <a name="portOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverrides"></a>

```java
public GlobalacceleratorEndpointGroupPortOverridesList getPortOverrides();
```

- *Type:* <a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList">GlobalacceleratorEndpointGroupPortOverridesList</a>

---

##### `endpointConfigurationsInput`<sup>Optional</sup> <a name="endpointConfigurationsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointConfigurationsInput"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations> getEndpointConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>>

---

##### `endpointGroupRegionInput`<sup>Optional</sup> <a name="endpointGroupRegionInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegionInput"></a>

```java
public java.lang.String getEndpointGroupRegionInput();
```

- *Type:* java.lang.String

---

##### `healthCheckIntervalSecondsInput`<sup>Optional</sup> <a name="healthCheckIntervalSecondsInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSecondsInput"></a>

```java
public java.lang.Number getHealthCheckIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckPathInput`<sup>Optional</sup> <a name="healthCheckPathInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPathInput"></a>

```java
public java.lang.String getHealthCheckPathInput();
```

- *Type:* java.lang.String

---

##### `healthCheckPortInput`<sup>Optional</sup> <a name="healthCheckPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPortInput"></a>

```java
public java.lang.Number getHealthCheckPortInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckProtocolInput`<sup>Optional</sup> <a name="healthCheckProtocolInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocolInput"></a>

```java
public java.lang.String getHealthCheckProtocolInput();
```

- *Type:* java.lang.String

---

##### `listenerArnInput`<sup>Optional</sup> <a name="listenerArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArnInput"></a>

```java
public java.lang.String getListenerArnInput();
```

- *Type:* java.lang.String

---

##### `portOverridesInput`<sup>Optional</sup> <a name="portOverridesInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.portOverridesInput"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides> getPortOverridesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>>

---

##### `thresholdCountInput`<sup>Optional</sup> <a name="thresholdCountInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCountInput"></a>

```java
public java.lang.Number getThresholdCountInput();
```

- *Type:* java.lang.Number

---

##### `trafficDialPercentageInput`<sup>Optional</sup> <a name="trafficDialPercentageInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentageInput"></a>

```java
public java.lang.Number getTrafficDialPercentageInput();
```

- *Type:* java.lang.Number

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.endpointGroupRegion"></a>

```java
public java.lang.String getEndpointGroupRegion();
```

- *Type:* java.lang.String

---

##### `healthCheckIntervalSeconds`<sup>Required</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `healthCheckPath`<sup>Required</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

---

##### `healthCheckPort`<sup>Required</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckPort"></a>

```java
public java.lang.Number getHealthCheckPort();
```

- *Type:* java.lang.Number

---

##### `healthCheckProtocol`<sup>Required</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

---

##### `thresholdCount`<sup>Required</sup> <a name="thresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.thresholdCount"></a>

```java
public java.lang.Number getThresholdCount();
```

- *Type:* java.lang.Number

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalacceleratorEndpointGroupConfig <a name="GlobalacceleratorEndpointGroupConfig" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupConfig;

GlobalacceleratorEndpointGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointGroupRegion(java.lang.String)
    .listenerArn(java.lang.String)
//  .endpointConfigurations(IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations>)
//  .healthCheckIntervalSeconds(java.lang.Number)
//  .healthCheckPath(java.lang.String)
//  .healthCheckPort(java.lang.Number)
//  .healthCheckProtocol(java.lang.String)
//  .portOverrides(IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides>)
//  .thresholdCount(java.lang.Number)
//  .trafficDialPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion">endpointGroupRegion</a></code> | <code>java.lang.String</code> | The name of the AWS Region where the endpoint group is located. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn">listenerArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the listener. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations">endpointConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>></code> | The list of endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds">healthCheckIntervalSeconds</a></code> | <code>java.lang.Number</code> | The time in seconds between each health check for an endpoint. Must be a value of 10 or 30. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath">healthCheckPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort">healthCheckPort</a></code> | <code>java.lang.Number</code> | The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol">healthCheckProtocol</a></code> | <code>java.lang.String</code> | The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides">portOverrides</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount">thresholdCount</a></code> | <code>java.lang.Number</code> | The number of consecutive health checks required to set the state of the endpoint to unhealthy. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>java.lang.Number</code> | The percentage of traffic to sent to an AWS Region. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointGroupRegion`<sup>Required</sup> <a name="endpointGroupRegion" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointGroupRegion"></a>

```java
public java.lang.String getEndpointGroupRegion();
```

- *Type:* java.lang.String

The name of the AWS Region where the endpoint group is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_group_region GlobalacceleratorEndpointGroup#endpoint_group_region}

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.listenerArn"></a>

```java
public java.lang.String getListenerArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the listener.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_arn GlobalacceleratorEndpointGroup#listener_arn}

---

##### `endpointConfigurations`<sup>Optional</sup> <a name="endpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.endpointConfigurations"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations> getEndpointConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>>

The list of endpoint objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_configurations GlobalacceleratorEndpointGroup#endpoint_configurations}

---

##### `healthCheckIntervalSeconds`<sup>Optional</sup> <a name="healthCheckIntervalSeconds" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckIntervalSeconds"></a>

```java
public java.lang.Number getHealthCheckIntervalSeconds();
```

- *Type:* java.lang.Number

The time in seconds between each health check for an endpoint. Must be a value of 10 or 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_interval_seconds GlobalacceleratorEndpointGroup#health_check_interval_seconds}

---

##### `healthCheckPath`<sup>Optional</sup> <a name="healthCheckPath" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPath"></a>

```java
public java.lang.String getHealthCheckPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_path GlobalacceleratorEndpointGroup#health_check_path}.

---

##### `healthCheckPort`<sup>Optional</sup> <a name="healthCheckPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckPort"></a>

```java
public java.lang.Number getHealthCheckPort();
```

- *Type:* java.lang.Number

The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_port GlobalacceleratorEndpointGroup#health_check_port}

---

##### `healthCheckProtocol`<sup>Optional</sup> <a name="healthCheckProtocol" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.healthCheckProtocol"></a>

```java
public java.lang.String getHealthCheckProtocol();
```

- *Type:* java.lang.String

The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#health_check_protocol GlobalacceleratorEndpointGroup#health_check_protocol}

---

##### `portOverrides`<sup>Optional</sup> <a name="portOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.portOverrides"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides> getPortOverrides();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#port_overrides GlobalacceleratorEndpointGroup#port_overrides}.

---

##### `thresholdCount`<sup>Optional</sup> <a name="thresholdCount" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.thresholdCount"></a>

```java
public java.lang.Number getThresholdCount();
```

- *Type:* java.lang.Number

The number of consecutive health checks required to set the state of the endpoint to unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#threshold_count GlobalacceleratorEndpointGroup#threshold_count}

---

##### `trafficDialPercentage`<sup>Optional</sup> <a name="trafficDialPercentage" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupConfig.property.trafficDialPercentage"></a>

```java
public java.lang.Number getTrafficDialPercentage();
```

- *Type:* java.lang.Number

The percentage of traffic to sent to an AWS Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#traffic_dial_percentage GlobalacceleratorEndpointGroup#traffic_dial_percentage}

---

### GlobalacceleratorEndpointGroupEndpointConfigurations <a name="GlobalacceleratorEndpointGroupEndpointConfigurations" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfigurations;

GlobalacceleratorEndpointGroupEndpointConfigurations.builder()
//  .attachmentArn(java.lang.String)
//  .clientIpPreservationEnabled(java.lang.Boolean|IResolvable)
//  .endpointId(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn">attachmentArn</a></code> | <code>java.lang.String</code> | Attachment ARN that provides access control to the cross account endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | true if client ip should be preserved. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | Id of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight">weight</a></code> | <code>java.lang.Number</code> | The weight for the endpoint. |

---

##### `attachmentArn`<sup>Optional</sup> <a name="attachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.attachmentArn"></a>

```java
public java.lang.String getAttachmentArn();
```

- *Type:* java.lang.String

Attachment ARN that provides access control to the cross account endpoint.

Not required for resources hosted in the same account as the endpoint group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#attachment_arn GlobalacceleratorEndpointGroup#attachment_arn}

---

##### `clientIpPreservationEnabled`<sup>Optional</sup> <a name="clientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.clientIpPreservationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getClientIpPreservationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

true if client ip should be preserved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#client_ip_preservation_enabled GlobalacceleratorEndpointGroup#client_ip_preservation_enabled}

---

##### `endpointId`<sup>Optional</sup> <a name="endpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

Id of the endpoint.

For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_id GlobalacceleratorEndpointGroup#endpoint_id}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

The weight for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#weight GlobalacceleratorEndpointGroup#weight}

---

### GlobalacceleratorEndpointGroupPortOverrides <a name="GlobalacceleratorEndpointGroupPortOverrides" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverrides;

GlobalacceleratorEndpointGroupPortOverrides.builder()
//  .endpointPort(java.lang.Number)
//  .listenerPort(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort">endpointPort</a></code> | <code>java.lang.Number</code> | A network port number. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | A network port number. |

---

##### `endpointPort`<sup>Optional</sup> <a name="endpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.endpointPort"></a>

```java
public java.lang.Number getEndpointPort();
```

- *Type:* java.lang.Number

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#endpoint_port GlobalacceleratorEndpointGroup#endpoint_port}

---

##### `listenerPort`<sup>Optional</sup> <a name="listenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

A network port number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/globalaccelerator_endpoint_group#listener_port GlobalacceleratorEndpointGroup#listener_port}

---

## Classes <a name="Classes" id="Classes"></a>

### GlobalacceleratorEndpointGroupEndpointConfigurationsList <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfigurationsList;

new GlobalacceleratorEndpointGroupEndpointConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get"></a>

```java
public GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupEndpointConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>>

---


### GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference <a name="GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference;

new GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn">resetAttachmentArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled">resetClientIpPreservationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId">resetEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAttachmentArn` <a name="resetAttachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetAttachmentArn"></a>

```java
public void resetAttachmentArn()
```

##### `resetClientIpPreservationEnabled` <a name="resetClientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetClientIpPreservationEnabled"></a>

```java
public void resetClientIpPreservationEnabled()
```

##### `resetEndpointId` <a name="resetEndpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetEndpointId"></a>

```java
public void resetEndpointId()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput">attachmentArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput">clientIpPreservationEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn">attachmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled">clientIpPreservationEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentArnInput`<sup>Optional</sup> <a name="attachmentArnInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArnInput"></a>

```java
public java.lang.String getAttachmentArnInput();
```

- *Type:* java.lang.String

---

##### `clientIpPreservationEnabledInput`<sup>Optional</sup> <a name="clientIpPreservationEnabledInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getClientIpPreservationEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `attachmentArn`<sup>Required</sup> <a name="attachmentArn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.attachmentArn"></a>

```java
public java.lang.String getAttachmentArn();
```

- *Type:* java.lang.String

---

##### `clientIpPreservationEnabled`<sup>Required</sup> <a name="clientIpPreservationEnabled" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.clientIpPreservationEnabled"></a>

```java
public java.lang.Boolean|IResolvable getClientIpPreservationEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|GlobalacceleratorEndpointGroupEndpointConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupEndpointConfigurations">GlobalacceleratorEndpointGroupEndpointConfigurations</a>

---


### GlobalacceleratorEndpointGroupPortOverridesList <a name="GlobalacceleratorEndpointGroupPortOverridesList" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverridesList;

new GlobalacceleratorEndpointGroupPortOverridesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get"></a>

```java
public GlobalacceleratorEndpointGroupPortOverridesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GlobalacceleratorEndpointGroupPortOverrides> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>>

---


### GlobalacceleratorEndpointGroupPortOverridesOutputReference <a name="GlobalacceleratorEndpointGroupPortOverridesOutputReference" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.globalaccelerator_endpoint_group.GlobalacceleratorEndpointGroupPortOverridesOutputReference;

new GlobalacceleratorEndpointGroupPortOverridesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort">resetEndpointPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort">resetListenerPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointPort` <a name="resetEndpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetEndpointPort"></a>

```java
public void resetEndpointPort()
```

##### `resetListenerPort` <a name="resetListenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.resetListenerPort"></a>

```java
public void resetListenerPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput">endpointPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput">listenerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort">endpointPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointPortInput`<sup>Optional</sup> <a name="endpointPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPortInput"></a>

```java
public java.lang.Number getEndpointPortInput();
```

- *Type:* java.lang.Number

---

##### `listenerPortInput`<sup>Optional</sup> <a name="listenerPortInput" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPortInput"></a>

```java
public java.lang.Number getListenerPortInput();
```

- *Type:* java.lang.Number

---

##### `endpointPort`<sup>Required</sup> <a name="endpointPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.endpointPort"></a>

```java
public java.lang.Number getEndpointPort();
```

- *Type:* java.lang.Number

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverridesOutputReference.property.internalValue"></a>

```java
public IResolvable|GlobalacceleratorEndpointGroupPortOverrides getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.globalacceleratorEndpointGroup.GlobalacceleratorEndpointGroupPortOverrides">GlobalacceleratorEndpointGroupPortOverrides</a>

---



