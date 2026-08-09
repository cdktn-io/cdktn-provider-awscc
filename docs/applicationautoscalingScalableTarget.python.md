# `applicationautoscalingScalableTarget` Submodule <a name="`applicationautoscalingScalableTarget` Submodule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationautoscalingScalableTarget <a name="ApplicationautoscalingScalableTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  max_capacity: typing.Union[int, float],
  min_capacity: typing.Union[int, float],
  resource_id: str,
  scalable_dimension: str,
  service_namespace: str,
  role_arn: str = None,
  scheduled_actions: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions] = None,
  suspended_state: ApplicationautoscalingScalableTargetSuspendedState = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum value that you plan to scale out to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum value that you plan to scale in to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.resourceId">resource_id</a></code> | <code>str</code> | The identifier of the resource associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scalableDimension">scalable_dimension</a></code> | <code>str</code> | The scalable dimension associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.serviceNamespace">service_namespace</a></code> | <code>str</code> | The namespace of the AWS service that provides the resource, or a ``custom-resource``. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scheduledActions">scheduled_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]</code> | The scheduled actions for the scalable target. Duplicates aren't allowed. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.suspendedState">suspended_state</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The maximum value that you plan to scale out to.

When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

The minimum value that you plan to scale in to.

When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.resourceId"></a>

- *Type:* str

The identifier of the resource associated with the scalable target.

This string consists of the resource type and unique identifier.

* ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
* Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
* EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
* AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
* DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
* DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
* Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
* SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
* Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
* Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
* Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
* Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
* Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
* Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
* Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
* Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
* SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
* Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#resource_id ApplicationautoscalingScalableTarget#resource_id}

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scalableDimension"></a>

- *Type:* str

The scalable dimension associated with the scalable target.

This string consists of the service namespace, resource type, and scaling property.

* `ecs:service:DesiredCount` - The task count of an ECS service.
* `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
* `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
* `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
* `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
* `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
* `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
* `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
* `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
* `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
* `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
* `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
* `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
* `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
* `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
* `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
* `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
* `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
* `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
* `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
* `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
* `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
* `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
* `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scalable_dimension ApplicationautoscalingScalableTarget#scalable_dimension}

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.serviceNamespace"></a>

- *Type:* str

The namespace of the AWS service that provides the resource, or a ``custom-resource``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#service_namespace ApplicationautoscalingScalableTarget#service_namespace}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.roleArn"></a>

- *Type:* str

Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.

This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#role_arn ApplicationautoscalingScalableTarget#role_arn}

---

##### `scheduled_actions`<sup>Optional</sup> <a name="scheduled_actions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scheduledActions"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]

The scheduled actions for the scalable target. Duplicates aren't allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_actions ApplicationautoscalingScalableTarget#scheduled_actions}

---

##### `suspended_state`<sup>Optional</sup> <a name="suspended_state" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.suspendedState"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling.

Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
*Suspension Outcomes*

* For `DynamicScalingInSuspended`, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
* For `DynamicScalingOutSuspended`, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
* For `ScheduledScalingSuspended`, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#suspended_state ApplicationautoscalingScalableTarget#suspended_state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions">put_scheduled_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState">put_suspended_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions">reset_scheduled_actions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState">reset_suspended_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_scheduled_actions` <a name="put_scheduled_actions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions"></a>

```python
def put_scheduled_actions(
  value: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]

---

##### `put_suspended_state` <a name="put_suspended_state" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState"></a>

```python
def put_suspended_state(
  dynamic_scaling_in_suspended: bool | IResolvable = None,
  dynamic_scaling_out_suspended: bool | IResolvable = None,
  scheduled_scaling_suspended: bool | IResolvable = None
) -> None
```

###### `dynamic_scaling_in_suspended`<sup>Optional</sup> <a name="dynamic_scaling_in_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState.parameter.dynamicScalingInSuspended"></a>

- *Type:* bool | cdktn.IResolvable

Whether scale in by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_in_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_in_suspended}

---

###### `dynamic_scaling_out_suspended`<sup>Optional</sup> <a name="dynamic_scaling_out_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState.parameter.dynamicScalingOutSuspended"></a>

- *Type:* bool | cdktn.IResolvable

Whether scale out by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_out_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_out_suspended}

---

###### `scheduled_scaling_suspended`<sup>Optional</sup> <a name="scheduled_scaling_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState.parameter.scheduledScalingSuspended"></a>

- *Type:* bool | cdktn.IResolvable

Whether scheduled scaling is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_scaling_suspended ApplicationautoscalingScalableTarget#scheduled_scaling_suspended}

---

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_scheduled_actions` <a name="reset_scheduled_actions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions"></a>

```python
def reset_scheduled_actions() -> None
```

##### `reset_suspended_state` <a name="reset_suspended_state" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState"></a>

```python
def reset_suspended_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationautoscalingScalableTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationautoscalingScalableTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationautoscalingScalableTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId">scalable_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions">scheduled_actions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState">suspended_state</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput">resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput">scalable_dimension_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput">scheduled_actions_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput">service_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput">suspended_state_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `scalable_target_id`<sup>Required</sup> <a name="scalable_target_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId"></a>

```python
scalable_target_id: str
```

- *Type:* str

---

##### `scheduled_actions`<sup>Required</sup> <a name="scheduled_actions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions"></a>

```python
scheduled_actions: ApplicationautoscalingScalableTargetScheduledActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a>

---

##### `suspended_state`<sup>Required</sup> <a name="suspended_state" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState"></a>

```python
suspended_state: ApplicationautoscalingScalableTargetSuspendedStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a>

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id_input`<sup>Optional</sup> <a name="resource_id_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput"></a>

```python
resource_id_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `scalable_dimension_input`<sup>Optional</sup> <a name="scalable_dimension_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput"></a>

```python
scalable_dimension_input: str
```

- *Type:* str

---

##### `scheduled_actions_input`<sup>Optional</sup> <a name="scheduled_actions_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput"></a>

```python
scheduled_actions_input: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]

---

##### `service_namespace_input`<sup>Optional</sup> <a name="service_namespace_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput"></a>

```python
service_namespace_input: str
```

- *Type:* str

---

##### `suspended_state_input`<sup>Optional</sup> <a name="suspended_state_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput"></a>

```python
suspended_state_input: IResolvable | ApplicationautoscalingScalableTargetSuspendedState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationautoscalingScalableTargetConfig <a name="ApplicationautoscalingScalableTargetConfig" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  max_capacity: typing.Union[int, float],
  min_capacity: typing.Union[int, float],
  resource_id: str,
  scalable_dimension: str,
  service_namespace: str,
  role_arn: str = None,
  scheduled_actions: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions] = None,
  suspended_state: ApplicationautoscalingScalableTargetSuspendedState = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum value that you plan to scale out to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum value that you plan to scale in to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId">resource_id</a></code> | <code>str</code> | The identifier of the resource associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension">scalable_dimension</a></code> | <code>str</code> | The scalable dimension associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace">service_namespace</a></code> | <code>str</code> | The namespace of the AWS service that provides the resource, or a ``custom-resource``. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions">scheduled_actions</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]</code> | The scheduled actions for the scalable target. Duplicates aren't allowed. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState">suspended_state</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum value that you plan to scale out to.

When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum value that you plan to scale in to.

When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

The identifier of the resource associated with the scalable target.

This string consists of the resource type and unique identifier.

* ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service`.
* Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE`.
* EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0`.
* AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet`.
* DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table`.
* DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index`.
* Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster`.
* SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
* Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE`.
* Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE`.
* Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST`. Example: `function:my-function:prod` or `function:my-function:1`.
* Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable`.
* Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5`.
* Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster`.
* Amazon ElastiCache cache cluster - The resource type is `cache-cluster` and the unique identifier is the cache cluster name. Example: `cache-cluster/mycluster`.
* Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster`.
* SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering`.
* SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component`.
* Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#resource_id ApplicationautoscalingScalableTarget#resource_id}

---

##### `scalable_dimension`<sup>Required</sup> <a name="scalable_dimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension"></a>

```python
scalable_dimension: str
```

- *Type:* str

The scalable dimension associated with the scalable target.

This string consists of the service namespace, resource type, and scaling property.

* `ecs:service:DesiredCount` - The task count of an ECS service.
* `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
* `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
* `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
* `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
* `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
* `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
* `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
* `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
* `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
* `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
* `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
* `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
* `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
* `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
* `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
* `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
* `elasticache:cache-cluster:Nodes` - The number of nodes for an Amazon ElastiCache cache cluster.
* `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
* `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
* `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
* `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
* `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
* `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scalable_dimension ApplicationautoscalingScalableTarget#scalable_dimension}

---

##### `service_namespace`<sup>Required</sup> <a name="service_namespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace"></a>

```python
service_namespace: str
```

- *Type:* str

The namespace of the AWS service that provides the resource, or a ``custom-resource``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#service_namespace ApplicationautoscalingScalableTarget#service_namespace}

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.

This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#role_arn ApplicationautoscalingScalableTarget#role_arn}

---

##### `scheduled_actions`<sup>Optional</sup> <a name="scheduled_actions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions"></a>

```python
scheduled_actions: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]

The scheduled actions for the scalable target. Duplicates aren't allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_actions ApplicationautoscalingScalableTarget#scheduled_actions}

---

##### `suspended_state`<sup>Optional</sup> <a name="suspended_state" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState"></a>

```python
suspended_state: ApplicationautoscalingScalableTargetSuspendedState
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling.

Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
*Suspension Outcomes*

* For `DynamicScalingInSuspended`, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
* For `DynamicScalingOutSuspended`, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
* For `ScheduledScalingSuspended`, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#suspended_state ApplicationautoscalingScalableTarget#suspended_state}

---

### ApplicationautoscalingScalableTargetScheduledActions <a name="ApplicationautoscalingScalableTargetScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions(
  end_time: str = None,
  scalable_target_action: ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction = None,
  schedule: str = None,
  scheduled_action_name: str = None,
  start_time: str = None,
  timezone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime">end_time</a></code> | <code>str</code> | The date and time that the action is scheduled to end, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction">scalable_target_action</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | The new minimum and maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule">schedule</a></code> | <code>str</code> | The schedule for this action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | The name of the scheduled action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime">start_time</a></code> | <code>str</code> | The date and time that the action is scheduled to begin, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone">timezone</a></code> | <code>str</code> | The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression. |

---

##### `end_time`<sup>Optional</sup> <a name="end_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

The date and time that the action is scheduled to end, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#end_time ApplicationautoscalingScalableTarget#end_time}

---

##### `scalable_target_action`<sup>Optional</sup> <a name="scalable_target_action" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction"></a>

```python
scalable_target_action: ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

The new minimum and maximum capacity.

You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scalable_target_action ApplicationautoscalingScalableTarget#scalable_target_action}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

The schedule for this action.

The following formats are supported:

* At expressions - "`at(yyyy-mm-ddThh:mm:ss)`"
* Rate expressions - "`rate(valueunit)`"
* Cron expressions - "`cron(fields)`"

At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
At and cron expressions use Universal Coordinated Time (UTC) by default.
The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#schedule ApplicationautoscalingScalableTarget#schedule}

---

##### `scheduled_action_name`<sup>Optional</sup> <a name="scheduled_action_name" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

The name of the scheduled action.

This name must be unique among all other scheduled actions on the specified scalable target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_action_name ApplicationautoscalingScalableTarget#scheduled_action_name}

---

##### `start_time`<sup>Optional</sup> <a name="start_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

The date and time that the action is scheduled to begin, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#start_time ApplicationautoscalingScalableTarget#start_time}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#timezone ApplicationautoscalingScalableTarget#timezone}

---

### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | The maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | The minimum capacity. |

---

##### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

### ApplicationautoscalingScalableTargetSuspendedState <a name="ApplicationautoscalingScalableTargetSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState(
  dynamic_scaling_in_suspended: bool | IResolvable = None,
  dynamic_scaling_out_suspended: bool | IResolvable = None,
  scheduled_scaling_suspended: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended">dynamic_scaling_in_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended">dynamic_scaling_out_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended">scheduled_scaling_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether scheduled scaling is suspended. |

---

##### `dynamic_scaling_in_suspended`<sup>Optional</sup> <a name="dynamic_scaling_in_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended"></a>

```python
dynamic_scaling_in_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether scale in by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_in_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_in_suspended}

---

##### `dynamic_scaling_out_suspended`<sup>Optional</sup> <a name="dynamic_scaling_out_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended"></a>

```python
dynamic_scaling_out_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether scale out by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_out_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_out_suspended}

---

##### `scheduled_scaling_suspended`<sup>Optional</sup> <a name="scheduled_scaling_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended"></a>

```python
scheduled_scaling_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether scheduled scaling is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_scaling_suspended ApplicationautoscalingScalableTarget#scheduled_scaling_suspended}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationautoscalingScalableTargetScheduledActionsList <a name="ApplicationautoscalingScalableTargetScheduledActionsList" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationautoscalingScalableTargetScheduledActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApplicationautoscalingScalableTargetScheduledActions]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>]

---


### ApplicationautoscalingScalableTargetScheduledActionsOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction">put_scalable_target_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime">reset_end_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction">reset_scalable_target_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule">reset_schedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName">reset_scheduled_action_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime">reset_start_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone">reset_timezone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_scalable_target_action` <a name="put_scalable_target_action" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction"></a>

```python
def put_scalable_target_action(
  max_capacity: typing.Union[int, float] = None,
  min_capacity: typing.Union[int, float] = None
) -> None
```

###### `max_capacity`<sup>Optional</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction.parameter.maxCapacity"></a>

- *Type:* typing.Union[int, float]

The maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

###### `min_capacity`<sup>Optional</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction.parameter.minCapacity"></a>

- *Type:* typing.Union[int, float]

The minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `reset_end_time` <a name="reset_end_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime"></a>

```python
def reset_end_time() -> None
```

##### `reset_scalable_target_action` <a name="reset_scalable_target_action" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction"></a>

```python
def reset_scalable_target_action() -> None
```

##### `reset_schedule` <a name="reset_schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule"></a>

```python
def reset_schedule() -> None
```

##### `reset_scheduled_action_name` <a name="reset_scheduled_action_name" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName"></a>

```python
def reset_scheduled_action_name() -> None
```

##### `reset_start_time` <a name="reset_start_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime"></a>

```python
def reset_start_time() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone"></a>

```python
def reset_timezone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction">scalable_target_action</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput">end_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput">scalable_target_action_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput">scheduled_action_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput">schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput">start_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime">end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule">schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName">scheduled_action_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `scalable_target_action`<sup>Required</sup> <a name="scalable_target_action" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction"></a>

```python
scalable_target_action: ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a>

---

##### `end_time_input`<sup>Optional</sup> <a name="end_time_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput"></a>

```python
end_time_input: str
```

- *Type:* str

---

##### `scalable_target_action_input`<sup>Optional</sup> <a name="scalable_target_action_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput"></a>

```python
scalable_target_action_input: IResolvable | ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---

##### `scheduled_action_name_input`<sup>Optional</sup> <a name="scheduled_action_name_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput"></a>

```python
scheduled_action_name_input: str
```

- *Type:* str

---

##### `schedule_input`<sup>Optional</sup> <a name="schedule_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput"></a>

```python
schedule_input: str
```

- *Type:* str

---

##### `start_time_input`<sup>Optional</sup> <a name="start_time_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput"></a>

```python
start_time_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `end_time`<sup>Required</sup> <a name="end_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime"></a>

```python
end_time: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule"></a>

```python
schedule: str
```

- *Type:* str

---

##### `scheduled_action_name`<sup>Required</sup> <a name="scheduled_action_name" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName"></a>

```python
scheduled_action_name: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationautoscalingScalableTargetScheduledActions
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>

---


### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity">reset_max_capacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity">reset_min_capacity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_capacity` <a name="reset_max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity"></a>

```python
def reset_max_capacity() -> None
```

##### `reset_min_capacity` <a name="reset_min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity"></a>

```python
def reset_min_capacity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput">max_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput">min_capacity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity">max_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity">min_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_capacity_input`<sup>Optional</sup> <a name="max_capacity_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```python
max_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_input`<sup>Optional</sup> <a name="min_capacity_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput"></a>

```python
min_capacity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_capacity`<sup>Required</sup> <a name="max_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity"></a>

```python
max_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity`<sup>Required</sup> <a name="min_capacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity"></a>

```python
min_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---


### ApplicationautoscalingScalableTargetSuspendedStateOutputReference <a name="ApplicationautoscalingScalableTargetSuspendedStateOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import applicationautoscaling_scalable_target

applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended">reset_dynamic_scaling_in_suspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended">reset_dynamic_scaling_out_suspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended">reset_scheduled_scaling_suspended</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dynamic_scaling_in_suspended` <a name="reset_dynamic_scaling_in_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended"></a>

```python
def reset_dynamic_scaling_in_suspended() -> None
```

##### `reset_dynamic_scaling_out_suspended` <a name="reset_dynamic_scaling_out_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended"></a>

```python
def reset_dynamic_scaling_out_suspended() -> None
```

##### `reset_scheduled_scaling_suspended` <a name="reset_scheduled_scaling_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended"></a>

```python
def reset_scheduled_scaling_suspended() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput">dynamic_scaling_in_suspended_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput">dynamic_scaling_out_suspended_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput">scheduled_scaling_suspended_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">dynamic_scaling_in_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">dynamic_scaling_out_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">scheduled_scaling_suspended</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dynamic_scaling_in_suspended_input`<sup>Optional</sup> <a name="dynamic_scaling_in_suspended_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput"></a>

```python
dynamic_scaling_in_suspended_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dynamic_scaling_out_suspended_input`<sup>Optional</sup> <a name="dynamic_scaling_out_suspended_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput"></a>

```python
dynamic_scaling_out_suspended_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scheduled_scaling_suspended_input`<sup>Optional</sup> <a name="scheduled_scaling_suspended_input" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput"></a>

```python
scheduled_scaling_suspended_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dynamic_scaling_in_suspended`<sup>Required</sup> <a name="dynamic_scaling_in_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```python
dynamic_scaling_in_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dynamic_scaling_out_suspended`<sup>Required</sup> <a name="dynamic_scaling_out_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```python
dynamic_scaling_out_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `scheduled_scaling_suspended`<sup>Required</sup> <a name="scheduled_scaling_suspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```python
scheduled_scaling_suspended: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApplicationautoscalingScalableTargetSuspendedState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---



