# `ec2ApplicationStatusCheck` Submodule <a name="`ec2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2ApplicationStatusCheck <a name="Ec2ApplicationStatusCheck" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheck;

Ec2ApplicationStatusCheck.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .aggregation(java.lang.String)
//  .deviceIndex(java.lang.Number)
//  .failureThreshold(java.lang.Number)
//  .healthCheckPaths(IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths>)
//  .initializationGracePeriodSeconds(java.lang.Number)
//  .interval(java.lang.Number)
//  .ipScope(java.lang.String)
//  .ipVersion(java.lang.String)
//  .path(java.lang.String)
//  .statusCodeMatcher(java.lang.String)
//  .successThreshold(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2ApplicationStatusCheckTags>)
//  .timeout(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.healthCheckPaths">healthCheckPaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>></code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.interval">interval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipScope">ipScope</a></code> | <code>java.lang.String</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>></code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout, in seconds, for each health check probe. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.aggregation"></a>

- *Type:* java.lang.String

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.deviceIndex"></a>

- *Type:* java.lang.Number

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.failureThreshold"></a>

- *Type:* java.lang.Number

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `healthCheckPaths`<sup>Optional</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.healthCheckPaths"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>>

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `initializationGracePeriodSeconds`<sup>Optional</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.initializationGracePeriodSeconds"></a>

- *Type:* java.lang.Number

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.interval"></a>

- *Type:* java.lang.Number

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `ipScope`<sup>Optional</sup> <a name="ipScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipScope"></a>

- *Type:* java.lang.String

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.path"></a>

- *Type:* java.lang.String

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `statusCodeMatcher`<sup>Optional</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.statusCodeMatcher"></a>

- *Type:* java.lang.String

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.successThreshold"></a>

- *Type:* java.lang.Number

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>>

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.Initializer.parameter.timeout"></a>

- *Type:* java.lang.Number

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths">putHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation">resetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex">resetDeviceIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths">resetHealthCheckPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds">resetInitializationGracePeriodSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope">resetIpScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher">resetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHealthCheckPaths` <a name="putHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths"></a>

```java
public void putHealthCheckPaths(IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putHealthCheckPaths.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Ec2ApplicationStatusCheckTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>>

---

##### `resetAggregation` <a name="resetAggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetAggregation"></a>

```java
public void resetAggregation()
```

##### `resetDeviceIndex` <a name="resetDeviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetDeviceIndex"></a>

```java
public void resetDeviceIndex()
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetFailureThreshold"></a>

```java
public void resetFailureThreshold()
```

##### `resetHealthCheckPaths` <a name="resetHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetHealthCheckPaths"></a>

```java
public void resetHealthCheckPaths()
```

##### `resetInitializationGracePeriodSeconds` <a name="resetInitializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInitializationGracePeriodSeconds"></a>

```java
public void resetInitializationGracePeriodSeconds()
```

##### `resetInterval` <a name="resetInterval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetIpScope` <a name="resetIpScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpScope"></a>

```java
public void resetIpScope()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetPath"></a>

```java
public void resetPath()
```

##### `resetStatusCodeMatcher` <a name="resetStatusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetStatusCodeMatcher"></a>

```java
public void resetStatusCodeMatcher()
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetSuccessThreshold"></a>

```java
public void resetSuccessThreshold()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.resetTimeout"></a>

```java
public void resetTimeout()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheck;

Ec2ApplicationStatusCheck.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheck;

Ec2ApplicationStatusCheck.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheck;

Ec2ApplicationStatusCheck.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheck;

Ec2ApplicationStatusCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ec2ApplicationStatusCheck.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Ec2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ec2ApplicationStatusCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ec2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Ec2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId">applicationStatusCheckId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime">creationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths">healthCheckPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput">aggregationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput">deviceIndexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput">failureThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput">healthCheckPathsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput">initializationGracePeriodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput">ipScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput">statusCodeMatcherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput">successThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope">ipScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationStatusCheckId`<sup>Required</sup> <a name="applicationStatusCheckId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```java
public java.lang.String getApplicationStatusCheckId();
```

- *Type:* java.lang.String

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.creationTime"></a>

```java
public java.lang.String getCreationTime();
```

- *Type:* java.lang.String

---

##### `healthCheckPaths`<sup>Required</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPaths"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsList getHealthCheckPaths();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList">Ec2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tags"></a>

```java
public Ec2ApplicationStatusCheckTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList">Ec2ApplicationStatusCheckTagsList</a>

---

##### `aggregationInput`<sup>Optional</sup> <a name="aggregationInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregationInput"></a>

```java
public java.lang.String getAggregationInput();
```

- *Type:* java.lang.String

---

##### `deviceIndexInput`<sup>Optional</sup> <a name="deviceIndexInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndexInput"></a>

```java
public java.lang.Number getDeviceIndexInput();
```

- *Type:* java.lang.Number

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThresholdInput"></a>

```java
public java.lang.Number getFailureThresholdInput();
```

- *Type:* java.lang.Number

---

##### `healthCheckPathsInput`<sup>Optional</sup> <a name="healthCheckPathsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.healthCheckPathsInput"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths> getHealthCheckPathsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>>

---

##### `initializationGracePeriodSecondsInput`<sup>Optional</sup> <a name="initializationGracePeriodSecondsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSecondsInput"></a>

```java
public java.lang.Number getInitializationGracePeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `ipScopeInput`<sup>Optional</sup> <a name="ipScopeInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScopeInput"></a>

```java
public java.lang.String getIpScopeInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `statusCodeMatcherInput`<sup>Optional</sup> <a name="statusCodeMatcherInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcherInput"></a>

```java
public java.lang.String getStatusCodeMatcherInput();
```

- *Type:* java.lang.String

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThresholdInput"></a>

```java
public java.lang.Number getSuccessThresholdInput();
```

- *Type:* java.lang.Number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

---

##### `deviceIndex`<sup>Required</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

---

##### `initializationGracePeriodSeconds`<sup>Required</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```java
public java.lang.Number getInitializationGracePeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `ipScope`<sup>Required</sup> <a name="ipScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipScope"></a>

```java
public java.lang.String getIpScope();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```java
public java.lang.String getStatusCodeMatcher();
```

- *Type:* java.lang.String

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheck.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2ApplicationStatusCheckConfig <a name="Ec2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckConfig;

Ec2ApplicationStatusCheckConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .port(java.lang.Number)
    .protocol(java.lang.String)
//  .aggregation(java.lang.String)
//  .deviceIndex(java.lang.Number)
//  .failureThreshold(java.lang.Number)
//  .healthCheckPaths(IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths>)
//  .initializationGracePeriodSeconds(java.lang.Number)
//  .interval(java.lang.Number)
//  .ipScope(java.lang.String)
//  .ipVersion(java.lang.String)
//  .path(java.lang.String)
//  .statusCodeMatcher(java.lang.String)
//  .successThreshold(java.lang.Number)
//  .tags(IResolvable|java.util.List<Ec2ApplicationStatusCheckTags>)
//  .timeout(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port">port</a></code> | <code>java.lang.Number</code> | The port used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The network protocol used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation">aggregation</a></code> | <code>java.lang.String</code> | Whether this check is included in the rolled-up application status. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex">deviceIndex</a></code> | <code>java.lang.Number</code> | The network interface device index used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold">failureThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive failed probes required to mark the instance unhealthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths">healthCheckPaths</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>></code> | The source/destination network paths used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds">initializationGracePeriodSeconds</a></code> | <code>java.lang.Number</code> | Seconds to wait after instance launch before beginning health checks. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval">interval</a></code> | <code>java.lang.Number</code> | The interval, in seconds, between health check probes. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope">ipScope</a></code> | <code>java.lang.String</code> | The IP scope used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP version used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path">path</a></code> | <code>java.lang.String</code> | The HTTP path used for the health check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>java.lang.String</code> | The HTTP status codes considered successful (e.g., "200-299"). |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold">successThreshold</a></code> | <code>java.lang.Number</code> | The number of consecutive successful probes required to mark the instance healthy. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>></code> | Tags to apply to the application status check. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | The timeout, in seconds, for each health check probe. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#port Ec2ApplicationStatusCheck#port}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The network protocol used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#protocol Ec2ApplicationStatusCheck#protocol}

---

##### `aggregation`<sup>Optional</sup> <a name="aggregation" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.aggregation"></a>

```java
public java.lang.String getAggregation();
```

- *Type:* java.lang.String

Whether this check is included in the rolled-up application status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#aggregation Ec2ApplicationStatusCheck#aggregation}

---

##### `deviceIndex`<sup>Optional</sup> <a name="deviceIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.deviceIndex"></a>

```java
public java.lang.Number getDeviceIndex();
```

- *Type:* java.lang.Number

The network interface device index used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#device_index Ec2ApplicationStatusCheck#device_index}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.failureThreshold"></a>

```java
public java.lang.Number getFailureThreshold();
```

- *Type:* java.lang.Number

The number of consecutive failed probes required to mark the instance unhealthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#failure_threshold Ec2ApplicationStatusCheck#failure_threshold}

---

##### `healthCheckPaths`<sup>Optional</sup> <a name="healthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.healthCheckPaths"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths> getHealthCheckPaths();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>>

The source/destination network paths used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#health_check_paths Ec2ApplicationStatusCheck#health_check_paths}

---

##### `initializationGracePeriodSeconds`<sup>Optional</sup> <a name="initializationGracePeriodSeconds" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.initializationGracePeriodSeconds"></a>

```java
public java.lang.Number getInitializationGracePeriodSeconds();
```

- *Type:* java.lang.Number

Seconds to wait after instance launch before beginning health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#initialization_grace_period_seconds Ec2ApplicationStatusCheck#initialization_grace_period_seconds}

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

The interval, in seconds, between health check probes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#interval Ec2ApplicationStatusCheck#interval}

---

##### `ipScope`<sup>Optional</sup> <a name="ipScope" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipScope"></a>

```java
public java.lang.String getIpScope();
```

- *Type:* java.lang.String

The IP scope used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_scope Ec2ApplicationStatusCheck#ip_scope}

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

The IP version used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#ip_version Ec2ApplicationStatusCheck#ip_version}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The HTTP path used for the health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#path Ec2ApplicationStatusCheck#path}

---

##### `statusCodeMatcher`<sup>Optional</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.statusCodeMatcher"></a>

```java
public java.lang.String getStatusCodeMatcher();
```

- *Type:* java.lang.String

The HTTP status codes considered successful (e.g., "200-299").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#status_code_matcher Ec2ApplicationStatusCheck#status_code_matcher}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.successThreshold"></a>

```java
public java.lang.Number getSuccessThreshold();
```

- *Type:* java.lang.Number

The number of consecutive successful probes required to mark the instance healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#success_threshold Ec2ApplicationStatusCheck#success_threshold}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>>

Tags to apply to the application status check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#tags Ec2ApplicationStatusCheck#tags}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckConfig.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

The timeout, in seconds, for each health check probe.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#timeout Ec2ApplicationStatusCheck#timeout}

---

### Ec2ApplicationStatusCheckHealthCheckPaths <a name="Ec2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPaths;

Ec2ApplicationStatusCheckHealthCheckPaths.builder()
//  .destinations(IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPathsDestinations>)
//  .source(Ec2ApplicationStatusCheckHealthCheckPathsSource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations">destinations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}. |

---

##### `destinations`<sup>Optional</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.destinations"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPathsDestinations> getDestinations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#destinations Ec2ApplicationStatusCheck#destinations}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths.property.source"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#source Ec2ApplicationStatusCheck#source}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsDestinations <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsDestinations;

Ec2ApplicationStatusCheckHealthCheckPathsDestinations.builder()
//  .securityGroupId(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckHealthCheckPathsSource <a name="Ec2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsSource;

Ec2ApplicationStatusCheckHealthCheckPathsSource.builder()
//  .securityGroupId(java.lang.String)
//  .subnetId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}. |

---

##### `securityGroupId`<sup>Optional</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#security_group_id Ec2ApplicationStatusCheck#security_group_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#subnet_id Ec2ApplicationStatusCheck#subnet_id}.

---

### Ec2ApplicationStatusCheckTags <a name="Ec2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckTags;

Ec2ApplicationStatusCheckTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#key Ec2ApplicationStatusCheck#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/resources/ec2_application_status_check#value Ec2ApplicationStatusCheck#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList;

new Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPathsDestinations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>>

---


### Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference;

new Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSecurityGroupId"></a>

```java
public void resetSecurityGroupId()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsDestinations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsList <a name="Ec2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsList;

new Ec2ApplicationStatusCheckHealthCheckPathsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPaths> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>>

---


### Ec2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference;

new Ec2ApplicationStatusCheckHealthCheckPathsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations">putDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations">resetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource">resetSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDestinations` <a name="putDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations"></a>

```java
public void putDestinations(IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPathsDestinations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putDestinations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>>

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource"></a>

```java
public void putSource(Ec2ApplicationStatusCheckHealthCheckPathsSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `resetDestinations` <a name="resetDestinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetDestinations"></a>

```java
public void resetDestinations()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.resetSource"></a>

```java
public void resetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput">destinationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList getDestinations();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList">Ec2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```java
public Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `destinationsInput`<sup>Optional</sup> <a name="destinationsInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinationsInput"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckHealthCheckPathsDestinations> getDestinationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsDestinations">Ec2ApplicationStatusCheckHealthCheckPathsDestinations</a>>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.sourceInput"></a>

```java
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPaths getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPaths">Ec2ApplicationStatusCheckHealthCheckPaths</a>

---


### Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference;

new Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId">resetSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupId` <a name="resetSecurityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSecurityGroupId"></a>

```java
public void resetSecurityGroupId()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">securityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupIdInput"></a>

```java
public java.lang.String getSecurityGroupIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```java
public java.lang.String getSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2ApplicationStatusCheckHealthCheckPathsSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckHealthCheckPathsSource">Ec2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### Ec2ApplicationStatusCheckTagsList <a name="Ec2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckTagsList;

new Ec2ApplicationStatusCheckTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get"></a>

```java
public Ec2ApplicationStatusCheckTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Ec2ApplicationStatusCheckTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>>

---


### Ec2ApplicationStatusCheckTagsOutputReference <a name="Ec2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ec2_application_status_check.Ec2ApplicationStatusCheckTagsOutputReference;

new Ec2ApplicationStatusCheckTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Ec2ApplicationStatusCheckTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2ApplicationStatusCheck.Ec2ApplicationStatusCheckTags">Ec2ApplicationStatusCheckTags</a>

---



