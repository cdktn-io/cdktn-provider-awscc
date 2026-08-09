# `applicationautoscalingScalableTarget` Submodule <a name="`applicationautoscalingScalableTarget` Submodule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationautoscalingScalableTarget <a name="ApplicationautoscalingScalableTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target awscc_applicationautoscaling_scalable_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTarget;

ApplicationautoscalingScalableTarget.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .roleArn(java.lang.String)
//  .scheduledActions(IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions>)
//  .suspendedState(ApplicationautoscalingScalableTargetSuspendedState)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum value that you plan to scale out to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum value that you plan to scale in to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The identifier of the resource associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | The scalable dimension associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the AWS service that provides the resource, or a ``custom-resource``. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scheduledActions">scheduledActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>></code> | The scheduled actions for the scalable target. Duplicates aren't allowed. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.suspendedState">suspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.maxCapacity"></a>

- *Type:* java.lang.Number

The maximum value that you plan to scale out to.

When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.minCapacity"></a>

- *Type:* java.lang.Number

The minimum value that you plan to scale in to.

When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.resourceId"></a>

- *Type:* java.lang.String

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

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scalableDimension"></a>

- *Type:* java.lang.String

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

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.serviceNamespace"></a>

- *Type:* java.lang.String

The namespace of the AWS service that provides the resource, or a ``custom-resource``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#service_namespace ApplicationautoscalingScalableTarget#service_namespace}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.

This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#role_arn ApplicationautoscalingScalableTarget#role_arn}

---

##### `scheduledActions`<sup>Optional</sup> <a name="scheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.scheduledActions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>>

The scheduled actions for the scalable target. Duplicates aren't allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_actions ApplicationautoscalingScalableTarget#scheduled_actions}

---

##### `suspendedState`<sup>Optional</sup> <a name="suspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.Initializer.parameter.suspendedState"></a>

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
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions">putScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState">putSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions">resetScheduledActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState">resetSuspendedState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScheduledActions` <a name="putScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions"></a>

```java
public void putScheduledActions(IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putScheduledActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>>

---

##### `putSuspendedState` <a name="putSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState"></a>

```java
public void putSuspendedState(ApplicationautoscalingScalableTargetSuspendedState value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.putSuspendedState.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetRoleArn"></a>

```java
public void resetRoleArn()
```

##### `resetScheduledActions` <a name="resetScheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetScheduledActions"></a>

```java
public void resetScheduledActions()
```

##### `resetSuspendedState` <a name="resetSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.resetSuspendedState"></a>

```java
public void resetSuspendedState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isConstruct"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTarget;

ApplicationautoscalingScalableTarget.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTarget;

ApplicationautoscalingScalableTarget.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTarget;

ApplicationautoscalingScalableTarget.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTarget;

ApplicationautoscalingScalableTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApplicationautoscalingScalableTarget.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApplicationautoscalingScalableTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApplicationautoscalingScalableTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApplicationautoscalingScalableTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationautoscalingScalableTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId">scalableTargetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions">scheduledActions</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState">suspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput">scalableDimensionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput">scheduledActionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput">serviceNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput">suspendedStateInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `scalableTargetId`<sup>Required</sup> <a name="scalableTargetId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableTargetId"></a>

```java
public java.lang.String getScalableTargetId();
```

- *Type:* java.lang.String

---

##### `scheduledActions`<sup>Required</sup> <a name="scheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActions"></a>

```java
public ApplicationautoscalingScalableTargetScheduledActionsList getScheduledActions();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList">ApplicationautoscalingScalableTargetScheduledActionsList</a>

---

##### `suspendedState`<sup>Required</sup> <a name="suspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedState"></a>

```java
public ApplicationautoscalingScalableTargetSuspendedStateOutputReference getSuspendedState();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference">ApplicationautoscalingScalableTargetSuspendedStateOutputReference</a>

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `scalableDimensionInput`<sup>Optional</sup> <a name="scalableDimensionInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimensionInput"></a>

```java
public java.lang.String getScalableDimensionInput();
```

- *Type:* java.lang.String

---

##### `scheduledActionsInput`<sup>Optional</sup> <a name="scheduledActionsInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scheduledActionsInput"></a>

```java
public IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions> getScheduledActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>>

---

##### `serviceNamespaceInput`<sup>Optional</sup> <a name="serviceNamespaceInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespaceInput"></a>

```java
public java.lang.String getServiceNamespaceInput();
```

- *Type:* java.lang.String

---

##### `suspendedStateInput`<sup>Optional</sup> <a name="suspendedStateInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.suspendedStateInput"></a>

```java
public IResolvable|ApplicationautoscalingScalableTargetSuspendedState getSuspendedStateInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

---

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTarget.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationautoscalingScalableTargetConfig <a name="ApplicationautoscalingScalableTargetConfig" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetConfig;

ApplicationautoscalingScalableTargetConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .maxCapacity(java.lang.Number)
    .minCapacity(java.lang.Number)
    .resourceId(java.lang.String)
    .scalableDimension(java.lang.String)
    .serviceNamespace(java.lang.String)
//  .roleArn(java.lang.String)
//  .scheduledActions(IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions>)
//  .suspendedState(ApplicationautoscalingScalableTargetSuspendedState)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum value that you plan to scale out to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum value that you plan to scale in to. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | The identifier of the resource associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension">scalableDimension</a></code> | <code>java.lang.String</code> | The scalable dimension associated with the scalable target. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace">serviceNamespace</a></code> | <code>java.lang.String</code> | The namespace of the AWS service that provides the resource, or a ``custom-resource``. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions">scheduledActions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>></code> | The scheduled actions for the scalable target. Duplicates aren't allowed. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState">suspendedState</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum value that you plan to scale out to.

When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

The minimum value that you plan to scale in to.

When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

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

##### `scalableDimension`<sup>Required</sup> <a name="scalableDimension" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scalableDimension"></a>

```java
public java.lang.String getScalableDimension();
```

- *Type:* java.lang.String

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

##### `serviceNamespace`<sup>Required</sup> <a name="serviceNamespace" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.serviceNamespace"></a>

```java
public java.lang.String getServiceNamespace();
```

- *Type:* java.lang.String

The namespace of the AWS service that provides the resource, or a ``custom-resource``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#service_namespace ApplicationautoscalingScalableTarget#service_namespace}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.

This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#role_arn ApplicationautoscalingScalableTarget#role_arn}

---

##### `scheduledActions`<sup>Optional</sup> <a name="scheduledActions" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.scheduledActions"></a>

```java
public IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions> getScheduledActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>>

The scheduled actions for the scalable target. Duplicates aren't allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_actions ApplicationautoscalingScalableTarget#scheduled_actions}

---

##### `suspendedState`<sup>Optional</sup> <a name="suspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetConfig.property.suspendedState"></a>

```java
public ApplicationautoscalingScalableTargetSuspendedState getSuspendedState();
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

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetScheduledActions;

ApplicationautoscalingScalableTargetScheduledActions.builder()
//  .endTime(java.lang.String)
//  .scalableTargetAction(ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction)
//  .schedule(java.lang.String)
//  .scheduledActionName(java.lang.String)
//  .startTime(java.lang.String)
//  .timezone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime">endTime</a></code> | <code>java.lang.String</code> | The date and time that the action is scheduled to end, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | The new minimum and maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule">schedule</a></code> | <code>java.lang.String</code> | The schedule for this action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName">scheduledActionName</a></code> | <code>java.lang.String</code> | The name of the scheduled action. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime">startTime</a></code> | <code>java.lang.String</code> | The date and time that the action is scheduled to begin, in UTC. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone">timezone</a></code> | <code>java.lang.String</code> | The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression. |

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

The date and time that the action is scheduled to end, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#end_time ApplicationautoscalingScalableTarget#end_time}

---

##### `scalableTargetAction`<sup>Optional</sup> <a name="scalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scalableTargetAction"></a>

```java
public ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction getScalableTargetAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

The new minimum and maximum capacity.

You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scalable_target_action ApplicationautoscalingScalableTarget#scalable_target_action}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

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

##### `scheduledActionName`<sup>Optional</sup> <a name="scheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.scheduledActionName"></a>

```java
public java.lang.String getScheduledActionName();
```

- *Type:* java.lang.String

The name of the scheduled action.

This name must be unique among all other scheduled actions on the specified scalable target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_action_name ApplicationautoscalingScalableTarget#scheduled_action_name}

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

The date and time that the action is scheduled to begin, in UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#start_time ApplicationautoscalingScalableTarget#start_time}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#timezone ApplicationautoscalingScalableTarget#timezone}

---

### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction;

ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.builder()
//  .maxCapacity(java.lang.Number)
//  .minCapacity(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | The maximum capacity. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | The minimum capacity. |

---

##### `maxCapacity`<sup>Optional</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

The maximum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#max_capacity ApplicationautoscalingScalableTarget#max_capacity}

---

##### `minCapacity`<sup>Optional</sup> <a name="minCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

The minimum capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#min_capacity ApplicationautoscalingScalableTarget#min_capacity}

---

### ApplicationautoscalingScalableTargetSuspendedState <a name="ApplicationautoscalingScalableTargetSuspendedState" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetSuspendedState;

ApplicationautoscalingScalableTargetSuspendedState.builder()
//  .dynamicScalingInSuspended(java.lang.Boolean|IResolvable)
//  .dynamicScalingOutSuspended(java.lang.Boolean|IResolvable)
//  .scheduledScalingSuspended(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended">dynamicScalingInSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended">dynamicScalingOutSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended">scheduledScalingSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether scheduled scaling is suspended. |

---

##### `dynamicScalingInSuspended`<sup>Optional</sup> <a name="dynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingInSuspended"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingInSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether scale in by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_in_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_in_suspended}

---

##### `dynamicScalingOutSuspended`<sup>Optional</sup> <a name="dynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.dynamicScalingOutSuspended"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingOutSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether scale out by a target tracking scaling policy or a step scaling policy is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#dynamic_scaling_out_suspended ApplicationautoscalingScalableTarget#dynamic_scaling_out_suspended}

---

##### `scheduledScalingSuspended`<sup>Optional</sup> <a name="scheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState.property.scheduledScalingSuspended"></a>

```java
public java.lang.Boolean|IResolvable getScheduledScalingSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether scheduled scaling is suspended.

Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/applicationautoscaling_scalable_target#scheduled_scaling_suspended ApplicationautoscalingScalableTarget#scheduled_scaling_suspended}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationautoscalingScalableTargetScheduledActionsList <a name="ApplicationautoscalingScalableTargetScheduledActionsList" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetScheduledActionsList;

new ApplicationautoscalingScalableTargetScheduledActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get"></a>

```java
public ApplicationautoscalingScalableTargetScheduledActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ApplicationautoscalingScalableTargetScheduledActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>>

---


### ApplicationautoscalingScalableTargetScheduledActionsOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetScheduledActionsOutputReference;

new ApplicationautoscalingScalableTargetScheduledActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction">putScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction">resetScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName">resetScheduledActionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime">resetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone">resetTimezone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScalableTargetAction` <a name="putScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction"></a>

```java
public void putScalableTargetAction(ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.putScalableTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---

##### `resetEndTime` <a name="resetEndTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetEndTime"></a>

```java
public void resetEndTime()
```

##### `resetScalableTargetAction` <a name="resetScalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScalableTargetAction"></a>

```java
public void resetScalableTargetAction()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```

##### `resetScheduledActionName` <a name="resetScheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetScheduledActionName"></a>

```java
public void resetScheduledActionName()
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetStartTime"></a>

```java
public void resetStartTime()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.resetTimezone"></a>

```java
public void resetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction">scalableTargetAction</a></code> | <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput">endTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput">scalableTargetActionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput">scheduledActionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput">startTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName">scheduledActionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scalableTargetAction`<sup>Required</sup> <a name="scalableTargetAction" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetAction"></a>

```java
public ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference getScalableTargetAction();
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference</a>

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTimeInput"></a>

```java
public java.lang.String getEndTimeInput();
```

- *Type:* java.lang.String

---

##### `scalableTargetActionInput`<sup>Optional</sup> <a name="scalableTargetActionInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scalableTargetActionInput"></a>

```java
public IResolvable|ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction getScalableTargetActionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---

##### `scheduledActionNameInput`<sup>Optional</sup> <a name="scheduledActionNameInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionNameInput"></a>

```java
public java.lang.String getScheduledActionNameInput();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTimeInput"></a>

```java
public java.lang.String getStartTimeInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `scheduledActionName`<sup>Required</sup> <a name="scheduledActionName" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.scheduledActionName"></a>

```java
public java.lang.String getScheduledActionName();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationautoscalingScalableTargetScheduledActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActions">ApplicationautoscalingScalableTargetScheduledActions</a>

---


### ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference <a name="ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference;

new ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity">resetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity">resetMinCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxCapacity` <a name="resetMaxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMaxCapacity"></a>

```java
public void resetMaxCapacity()
```

##### `resetMinCapacity` <a name="resetMinCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.resetMinCapacity"></a>

```java
public void resetMinCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput">maxCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput">minCapacityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity">maxCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity">minCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxCapacityInput`<sup>Optional</sup> <a name="maxCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacityInput"></a>

```java
public java.lang.Number getMaxCapacityInput();
```

- *Type:* java.lang.Number

---

##### `minCapacityInput`<sup>Optional</sup> <a name="minCapacityInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacityInput"></a>

```java
public java.lang.Number getMinCapacityInput();
```

- *Type:* java.lang.Number

---

##### `maxCapacity`<sup>Required</sup> <a name="maxCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.maxCapacity"></a>

```java
public java.lang.Number getMaxCapacity();
```

- *Type:* java.lang.Number

---

##### `minCapacity`<sup>Required</sup> <a name="minCapacity" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.minCapacity"></a>

```java
public java.lang.Number getMinCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetActionOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction">ApplicationautoscalingScalableTargetScheduledActionsScalableTargetAction</a>

---


### ApplicationautoscalingScalableTargetSuspendedStateOutputReference <a name="ApplicationautoscalingScalableTargetSuspendedStateOutputReference" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.applicationautoscaling_scalable_target.ApplicationautoscalingScalableTargetSuspendedStateOutputReference;

new ApplicationautoscalingScalableTargetSuspendedStateOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended">resetDynamicScalingInSuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended">resetDynamicScalingOutSuspended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended">resetScheduledScalingSuspended</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDynamicScalingInSuspended` <a name="resetDynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingInSuspended"></a>

```java
public void resetDynamicScalingInSuspended()
```

##### `resetDynamicScalingOutSuspended` <a name="resetDynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetDynamicScalingOutSuspended"></a>

```java
public void resetDynamicScalingOutSuspended()
```

##### `resetScheduledScalingSuspended` <a name="resetScheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.resetScheduledScalingSuspended"></a>

```java
public void resetScheduledScalingSuspended()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput">dynamicScalingInSuspendedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput">dynamicScalingOutSuspendedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput">scheduledScalingSuspendedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended">dynamicScalingInSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended">dynamicScalingOutSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended">scheduledScalingSuspended</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dynamicScalingInSuspendedInput`<sup>Optional</sup> <a name="dynamicScalingInSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspendedInput"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingInSuspendedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dynamicScalingOutSuspendedInput`<sup>Optional</sup> <a name="dynamicScalingOutSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspendedInput"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingOutSuspendedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scheduledScalingSuspendedInput`<sup>Optional</sup> <a name="scheduledScalingSuspendedInput" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspendedInput"></a>

```java
public java.lang.Boolean|IResolvable getScheduledScalingSuspendedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dynamicScalingInSuspended`<sup>Required</sup> <a name="dynamicScalingInSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingInSuspended"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingInSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dynamicScalingOutSuspended`<sup>Required</sup> <a name="dynamicScalingOutSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.dynamicScalingOutSuspended"></a>

```java
public java.lang.Boolean|IResolvable getDynamicScalingOutSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scheduledScalingSuspended`<sup>Required</sup> <a name="scheduledScalingSuspended" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.scheduledScalingSuspended"></a>

```java
public java.lang.Boolean|IResolvable getScheduledScalingSuspended();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedStateOutputReference.property.internalValue"></a>

```java
public IResolvable|ApplicationautoscalingScalableTargetSuspendedState getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationautoscalingScalableTarget.ApplicationautoscalingScalableTargetSuspendedState">ApplicationautoscalingScalableTargetSuspendedState</a>

---



