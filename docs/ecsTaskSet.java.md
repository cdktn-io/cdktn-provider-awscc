# `ecsTaskSet` Submodule <a name="`ecsTaskSet` Submodule" id="@cdktn/provider-awscc.ecsTaskSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskSet <a name="EcsTaskSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set awscc_ecs_task_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSet;

EcsTaskSet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .service(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy>)
//  .externalId(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancers(IResolvable|java.util.List<EcsTaskSetLoadBalancers>)
//  .networkConfiguration(EcsTaskSetNetworkConfiguration)
//  .platformVersion(java.lang.String)
//  .scale(EcsTaskSetScale)
//  .serviceRegistries(IResolvable|java.util.List<EcsTaskSetServiceRegistries>)
//  .tags(IResolvable|java.util.List<EcsTaskSetTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.cluster">cluster</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.externalId">externalId</a></code> | <code>java.lang.String</code> | An optional non-unique tag that identifies this task set in external systems. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.launchType">launchType</a></code> | <code>java.lang.String</code> | The launch type that new tasks in the task set will use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.loadBalancers">loadBalancers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | An object representing the network configuration for a task or service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | The platform version that the tasks in the task set should use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scale">scale</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | A floating-point percentage of the desired number of tasks to place and keep running in the task set. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.serviceRegistries">serviceRegistries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>></code> | The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.cluster"></a>

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#cluster EcsTaskSet#cluster}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service EcsTaskSet#service}

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.taskDefinition"></a>

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#task_definition EcsTaskSet#task_definition}

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.capacityProviderStrategy"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.externalId"></a>

- *Type:* java.lang.String

An optional non-unique tag that identifies this task set in external systems.

If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#external_id EcsTaskSet#external_id}

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.launchType"></a>

- *Type:* java.lang.String

The launch type that new tasks in the task set will use.

For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#launch_type EcsTaskSet#launch_type}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.loadBalancers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

An object representing the network configuration for a task or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.platformVersion"></a>

- *Type:* java.lang.String

The platform version that the tasks in the task set should use.

A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#platform_version EcsTaskSet#platform_version}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scale"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

A floating-point percentage of the desired number of tasks to place and keep running in the task set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#scale EcsTaskSet#scale}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.serviceRegistries"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>>

The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy">putCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers">putLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration">putNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale">putScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries">putServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy">resetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLaunchType">resetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLoadBalancers">resetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration">resetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetPlatformVersion">resetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetScale">resetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetServiceRegistries">resetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacityProviderStrategy` <a name="putCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy"></a>

```java
public void putCapacityProviderStrategy(IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---

##### `putLoadBalancers` <a name="putLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers"></a>

```java
public void putLoadBalancers(IResolvable|java.util.List<EcsTaskSetLoadBalancers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>>

---

##### `putNetworkConfiguration` <a name="putNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration"></a>

```java
public void putNetworkConfiguration(EcsTaskSetNetworkConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `putScale` <a name="putScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale"></a>

```java
public void putScale(EcsTaskSetScale value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `putServiceRegistries` <a name="putServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries"></a>

```java
public void putServiceRegistries(IResolvable|java.util.List<EcsTaskSetServiceRegistries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<EcsTaskSetTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>>

---

##### `resetCapacityProviderStrategy` <a name="resetCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy"></a>

```java
public void resetCapacityProviderStrategy()
```

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetExternalId"></a>

```java
public void resetExternalId()
```

##### `resetLaunchType` <a name="resetLaunchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLaunchType"></a>

```java
public void resetLaunchType()
```

##### `resetLoadBalancers` <a name="resetLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLoadBalancers"></a>

```java
public void resetLoadBalancers()
```

##### `resetNetworkConfiguration` <a name="resetNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration"></a>

```java
public void resetNetworkConfiguration()
```

##### `resetPlatformVersion` <a name="resetPlatformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetPlatformVersion"></a>

```java
public void resetPlatformVersion()
```

##### `resetScale` <a name="resetScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetScale"></a>

```java
public void resetScale()
```

##### `resetServiceRegistries` <a name="resetServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetServiceRegistries"></a>

```java
public void resetServiceRegistries()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcsTaskSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSet;

EcsTaskSet.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSet;

EcsTaskSet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSet;

EcsTaskSet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSet;

EcsTaskSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcsTaskSet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcsTaskSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcsTaskSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcsTaskSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcsTaskSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancers">loadBalancers</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList">EcsTaskSetLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scale">scale</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistries">serviceRegistries</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList">EcsTaskSetServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList">EcsTaskSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskSetId">taskSetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput">capacityProviderStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.clusterInput">clusterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalIdInput">externalIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchTypeInput">launchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancersInput">loadBalancersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput">networkConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersionInput">platformVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scaleInput">scaleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput">serviceRegistriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cluster">cluster</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalId">externalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchType">launchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy"></a>

```java
public EcsTaskSetCapacityProviderStrategyList getCapacityProviderStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancers"></a>

```java
public EcsTaskSetLoadBalancersList getLoadBalancers();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList">EcsTaskSetLoadBalancersList</a>

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfiguration"></a>

```java
public EcsTaskSetNetworkConfigurationOutputReference getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a>

---

##### `scale`<sup>Required</sup> <a name="scale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scale"></a>

```java
public EcsTaskSetScaleOutputReference getScale();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a>

---

##### `serviceRegistries`<sup>Required</sup> <a name="serviceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistries"></a>

```java
public EcsTaskSetServiceRegistriesList getServiceRegistries();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList">EcsTaskSetServiceRegistriesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tags"></a>

```java
public EcsTaskSetTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList">EcsTaskSetTagsList</a>

---

##### `taskSetId`<sup>Required</sup> <a name="taskSetId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskSetId"></a>

```java
public java.lang.String getTaskSetId();
```

- *Type:* java.lang.String

---

##### `capacityProviderStrategyInput`<sup>Optional</sup> <a name="capacityProviderStrategyInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput"></a>

```java
public IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy> getCapacityProviderStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---

##### `clusterInput`<sup>Optional</sup> <a name="clusterInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.clusterInput"></a>

```java
public java.lang.String getClusterInput();
```

- *Type:* java.lang.String

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalIdInput"></a>

```java
public java.lang.String getExternalIdInput();
```

- *Type:* java.lang.String

---

##### `launchTypeInput`<sup>Optional</sup> <a name="launchTypeInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchTypeInput"></a>

```java
public java.lang.String getLaunchTypeInput();
```

- *Type:* java.lang.String

---

##### `loadBalancersInput`<sup>Optional</sup> <a name="loadBalancersInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancersInput"></a>

```java
public IResolvable|java.util.List<EcsTaskSetLoadBalancers> getLoadBalancersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>>

---

##### `networkConfigurationInput`<sup>Optional</sup> <a name="networkConfigurationInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput"></a>

```java
public IResolvable|EcsTaskSetNetworkConfiguration getNetworkConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `platformVersionInput`<sup>Optional</sup> <a name="platformVersionInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersionInput"></a>

```java
public java.lang.String getPlatformVersionInput();
```

- *Type:* java.lang.String

---

##### `scaleInput`<sup>Optional</sup> <a name="scaleInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scaleInput"></a>

```java
public IResolvable|EcsTaskSetScale getScaleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `serviceRegistriesInput`<sup>Optional</sup> <a name="serviceRegistriesInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput"></a>

```java
public IResolvable|java.util.List<EcsTaskSetServiceRegistries> getServiceRegistriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tagsInput"></a>

```java
public IResolvable|java.util.List<EcsTaskSetTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>>

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput"></a>

```java
public java.lang.String getTaskDefinitionInput();
```

- *Type:* java.lang.String

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskSetCapacityProviderStrategy <a name="EcsTaskSetCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetCapacityProviderStrategy;

EcsTaskSetCapacityProviderStrategy.builder()
//  .base(java.lang.Number)
//  .capacityProvider(java.lang.String)
//  .weight(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base">base</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#base EcsTaskSet#base}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight">weight</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#weight EcsTaskSet#weight}. |

---

##### `base`<sup>Optional</sup> <a name="base" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#base EcsTaskSet#base}.

---

##### `capacityProvider`<sup>Optional</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#weight EcsTaskSet#weight}.

---

### EcsTaskSetConfig <a name="EcsTaskSetConfig" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetConfig;

EcsTaskSetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .cluster(java.lang.String)
    .service(java.lang.String)
    .taskDefinition(java.lang.String)
//  .capacityProviderStrategy(IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy>)
//  .externalId(java.lang.String)
//  .launchType(java.lang.String)
//  .loadBalancers(IResolvable|java.util.List<EcsTaskSetLoadBalancers>)
//  .networkConfiguration(EcsTaskSetNetworkConfiguration)
//  .platformVersion(java.lang.String)
//  .scale(EcsTaskSetScale)
//  .serviceRegistries(IResolvable|java.util.List<EcsTaskSetServiceRegistries>)
//  .tags(IResolvable|java.util.List<EcsTaskSetTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.cluster">cluster</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.service">service</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition">taskDefinition</a></code> | <code>java.lang.String</code> | The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.externalId">externalId</a></code> | <code>java.lang.String</code> | An optional non-unique tag that identifies this task set in external systems. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.launchType">launchType</a></code> | <code>java.lang.String</code> | The launch type that new tasks in the task set will use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.loadBalancers">loadBalancers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | An object representing the network configuration for a task or service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | The platform version that the tasks in the task set should use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.scale">scale</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | A floating-point percentage of the desired number of tasks to place and keep running in the task set. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries">serviceRegistries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>></code> | The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.cluster"></a>

```java
public java.lang.String getCluster();
```

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#cluster EcsTaskSet#cluster}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service EcsTaskSet#service}

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition"></a>

```java
public java.lang.String getTaskDefinition();
```

- *Type:* java.lang.String

The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#task_definition EcsTaskSet#task_definition}

---

##### `capacityProviderStrategy`<sup>Optional</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy"></a>

```java
public IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy> getCapacityProviderStrategy();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.externalId"></a>

```java
public java.lang.String getExternalId();
```

- *Type:* java.lang.String

An optional non-unique tag that identifies this task set in external systems.

If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#external_id EcsTaskSet#external_id}

---

##### `launchType`<sup>Optional</sup> <a name="launchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.launchType"></a>

```java
public java.lang.String getLaunchType();
```

- *Type:* java.lang.String

The launch type that new tasks in the task set will use.

For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#launch_type EcsTaskSet#launch_type}

---

##### `loadBalancers`<sup>Optional</sup> <a name="loadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.loadBalancers"></a>

```java
public IResolvable|java.util.List<EcsTaskSetLoadBalancers> getLoadBalancers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration"></a>

```java
public EcsTaskSetNetworkConfiguration getNetworkConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

An object representing the network configuration for a task or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `platformVersion`<sup>Optional</sup> <a name="platformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

The platform version that the tasks in the task set should use.

A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#platform_version EcsTaskSet#platform_version}

---

##### `scale`<sup>Optional</sup> <a name="scale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.scale"></a>

```java
public EcsTaskSetScale getScale();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

A floating-point percentage of the desired number of tasks to place and keep running in the task set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#scale EcsTaskSet#scale}

---

##### `serviceRegistries`<sup>Optional</sup> <a name="serviceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries"></a>

```java
public IResolvable|java.util.List<EcsTaskSetServiceRegistries> getServiceRegistries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>>

The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.tags"></a>

```java
public IResolvable|java.util.List<EcsTaskSetTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}.

---

### EcsTaskSetLoadBalancers <a name="EcsTaskSetLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetLoadBalancers;

EcsTaskSetLoadBalancers.builder()
//  .containerName(java.lang.String)
//  .containerPort(java.lang.Number)
//  .targetGroupArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerName">containerName</a></code> | <code>java.lang.String</code> | The name of the container (as it appears in a container definition) to associate with the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The port on the container to associate with the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

The name of the container (as it appears in a container definition) to associate with the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The port on the container to associate with the load balancer.

This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.

A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}

---

### EcsTaskSetNetworkConfiguration <a name="EcsTaskSetNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetNetworkConfiguration;

EcsTaskSetNetworkConfiguration.builder()
//  .awsVpcConfiguration(EcsTaskSetNetworkConfigurationAwsVpcConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | The VPC subnets and security groups associated with a task. |

---

##### `awsVpcConfiguration`<sup>Optional</sup> <a name="awsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.awsVpcConfiguration"></a>

```java
public EcsTaskSetNetworkConfigurationAwsVpcConfiguration getAwsVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

The VPC subnets and security groups associated with a task.

All specified subnets and security groups must be from the same VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#aws_vpc_configuration EcsTaskSet#aws_vpc_configuration}

---

### EcsTaskSetNetworkConfigurationAwsVpcConfiguration <a name="EcsTaskSetNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetNetworkConfigurationAwsVpcConfiguration;

EcsTaskSetNetworkConfigurationAwsVpcConfiguration.builder()
//  .assignPublicIp(java.lang.String)
//  .securityGroups(java.util.List<java.lang.String>)
//  .subnets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | Whether the task's elastic network interface receives a public IP address. The default value is DISABLED. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | The security groups associated with the task or service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | The subnets associated with the task or service. |

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

The security groups associated with the task or service.

If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#security_groups EcsTaskSet#security_groups}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

The subnets associated with the task or service.

There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#subnets EcsTaskSet#subnets}

---

### EcsTaskSetScale <a name="EcsTaskSetScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetScale;

EcsTaskSetScale.builder()
//  .unit(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.unit">unit</a></code> | <code>java.lang.String</code> | The unit of measure for the scale value. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.value">value</a></code> | <code>java.lang.Number</code> | The value, specified as a percent total of a service's desiredCount, to scale the task set. |

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

The unit of measure for the scale value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#unit EcsTaskSet#unit}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value, specified as a percent total of a service's desiredCount, to scale the task set.

Accepted values are numbers between 0 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}

---

### EcsTaskSetServiceRegistries <a name="EcsTaskSetServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetServiceRegistries;

EcsTaskSetServiceRegistries.builder()
//  .containerName(java.lang.String)
//  .containerPort(java.lang.Number)
//  .port(java.lang.Number)
//  .registryArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName">containerName</a></code> | <code>java.lang.String</code> | The container name value, already specified in the task definition, to be used for your service discovery service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | The port value, already specified in the task definition, to be used for your service discovery service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.port">port</a></code> | <code>java.lang.Number</code> | The port value used if your service discovery service specified an SRV record. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the service registry. |

---

##### `containerName`<sup>Optional</sup> <a name="containerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

The container name value, already specified in the task definition, to be used for your service discovery service.

If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}

---

##### `containerPort`<sup>Optional</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

The port value, already specified in the task definition, to be used for your service discovery service.

If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port value used if your service discovery service specified an SRV record.

This field may be used if both the awsvpc network mode and SRV records are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#port EcsTaskSet#port}

---

##### `registryArn`<sup>Optional</sup> <a name="registryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the service registry.

The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#registry_arn EcsTaskSet#registry_arn}

---

### EcsTaskSetTags <a name="EcsTaskSetTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetTags;

EcsTaskSetTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#key EcsTaskSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#key EcsTaskSet#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskSetCapacityProviderStrategyList <a name="EcsTaskSetCapacityProviderStrategyList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetCapacityProviderStrategyList;

new EcsTaskSetCapacityProviderStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get"></a>

```java
public EcsTaskSetCapacityProviderStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsTaskSetCapacityProviderStrategy> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>>

---


### EcsTaskSetCapacityProviderStrategyOutputReference <a name="EcsTaskSetCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetCapacityProviderStrategyOutputReference;

new EcsTaskSetCapacityProviderStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase">resetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetCapacityProvider">resetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBase` <a name="resetBase" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase"></a>

```java
public void resetBase()
```

##### `resetCapacityProvider` <a name="resetCapacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```java
public void resetCapacityProvider()
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetWeight"></a>

```java
public void resetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput">baseInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput">capacityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseInput`<sup>Optional</sup> <a name="baseInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```java
public java.lang.Number getBaseInput();
```

- *Type:* java.lang.Number

---

##### `capacityProviderInput`<sup>Optional</sup> <a name="capacityProviderInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```java
public java.lang.String getCapacityProviderInput();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```java
public java.lang.Number getWeightInput();
```

- *Type:* java.lang.Number

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base"></a>

```java
public java.lang.Number getBase();
```

- *Type:* java.lang.Number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```java
public java.lang.String getCapacityProvider();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight"></a>

```java
public java.lang.Number getWeight();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetCapacityProviderStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>

---


### EcsTaskSetLoadBalancersList <a name="EcsTaskSetLoadBalancersList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetLoadBalancersList;

new EcsTaskSetLoadBalancersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get"></a>

```java
public EcsTaskSetLoadBalancersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsTaskSetLoadBalancers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>>

---


### EcsTaskSetLoadBalancersOutputReference <a name="EcsTaskSetLoadBalancersOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetLoadBalancersOutputReference;

new EcsTaskSetLoadBalancersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetTargetGroupArn"></a>

```java
public void resetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArnInput"></a>

```java
public java.lang.String getTargetGroupArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArn"></a>

```java
public java.lang.String getTargetGroupArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetLoadBalancers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>

---


### EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference;

new EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets">resetSubnets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups"></a>

```java
public void resetSecurityGroups()
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets"></a>

```java
public void resetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.String getAssignPublicIpInput();
```

- *Type:* java.lang.String

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```java
public java.lang.String getAssignPublicIp();
```

- *Type:* java.lang.String

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```java
public java.util.List<java.lang.String> getSecurityGroups();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```java
public java.util.List<java.lang.String> getSubnets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetNetworkConfigurationAwsVpcConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---


### EcsTaskSetNetworkConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetNetworkConfigurationOutputReference;

new EcsTaskSetNetworkConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration">putAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAwsVpcConfiguration">resetAwsVpcConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsVpcConfiguration` <a name="putAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration"></a>

```java
public void putAwsVpcConfiguration(EcsTaskSetNetworkConfigurationAwsVpcConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---

##### `resetAwsVpcConfiguration` <a name="resetAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAwsVpcConfiguration"></a>

```java
public void resetAwsVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference">EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfigurationInput">awsVpcConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsVpcConfiguration`<sup>Required</sup> <a name="awsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```java
public EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference getAwsVpcConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference">EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `awsVpcConfigurationInput`<sup>Optional</sup> <a name="awsVpcConfigurationInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfigurationInput"></a>

```java
public IResolvable|EcsTaskSetNetworkConfigurationAwsVpcConfiguration getAwsVpcConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetNetworkConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---


### EcsTaskSetScaleOutputReference <a name="EcsTaskSetScaleOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetScaleOutputReference;

new EcsTaskSetScaleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit">resetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit"></a>

```java
public void resetUnit()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetScale getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---


### EcsTaskSetServiceRegistriesList <a name="EcsTaskSetServiceRegistriesList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetServiceRegistriesList;

new EcsTaskSetServiceRegistriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get"></a>

```java
public EcsTaskSetServiceRegistriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsTaskSetServiceRegistries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>>

---


### EcsTaskSetServiceRegistriesOutputReference <a name="EcsTaskSetServiceRegistriesOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetServiceRegistriesOutputReference;

new EcsTaskSetServiceRegistriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName">resetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort">resetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetRegistryArn">resetRegistryArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContainerName` <a name="resetContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName"></a>

```java
public void resetContainerName()
```

##### `resetContainerPort` <a name="resetContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort"></a>

```java
public void resetContainerPort()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetRegistryArn` <a name="resetRegistryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetRegistryArn"></a>

```java
public void resetRegistryArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput">containerPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput">registryArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName">containerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort">containerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn">registryArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput"></a>

```java
public java.lang.String getContainerNameInput();
```

- *Type:* java.lang.String

---

##### `containerPortInput`<sup>Optional</sup> <a name="containerPortInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput"></a>

```java
public java.lang.Number getContainerPortInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput"></a>

```java
public java.lang.String getRegistryArnInput();
```

- *Type:* java.lang.String

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName"></a>

```java
public java.lang.String getContainerName();
```

- *Type:* java.lang.String

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort"></a>

```java
public java.lang.Number getContainerPort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn"></a>

```java
public java.lang.String getRegistryArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetServiceRegistries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---


### EcsTaskSetTagsList <a name="EcsTaskSetTagsList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetTagsList;

new EcsTaskSetTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get"></a>

```java
public EcsTaskSetTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcsTaskSetTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>>

---


### EcsTaskSetTagsOutputReference <a name="EcsTaskSetTagsOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecs_task_set.EcsTaskSetTagsOutputReference;

new EcsTaskSetTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|EcsTaskSetTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>

---



