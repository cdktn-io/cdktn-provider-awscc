# `lambdaFunction` Submodule <a name="`lambdaFunction` Submodule" id="@cdktn/provider-awscc.lambdaFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaFunction <a name="LambdaFunction" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function awscc_lambda_function}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunction(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  code: LambdaFunctionCode,
  role: str,
  architectures: typing.List[str] = None,
  capacity_provider_config: LambdaFunctionCapacityProviderConfig = None,
  code_signing_config_arn: str = None,
  dead_letter_config: LambdaFunctionDeadLetterConfig = None,
  description: str = None,
  durable_config: LambdaFunctionDurableConfig = None,
  environment: LambdaFunctionEnvironment = None,
  ephemeral_storage: LambdaFunctionEphemeralStorage = None,
  file_system_configs: IResolvable | typing.List[LambdaFunctionFileSystemConfigs] = None,
  function_name: str = None,
  function_scaling_config: LambdaFunctionFunctionScalingConfig = None,
  handler: str = None,
  image_config: LambdaFunctionImageConfig = None,
  kms_key_arn: str = None,
  layers: typing.List[str] = None,
  logging_config: LambdaFunctionLoggingConfig = None,
  memory_size: typing.Union[int, float] = None,
  package_type: str = None,
  publish_to_latest_published: bool | IResolvable = None,
  recursive_loop: str = None,
  reserved_concurrent_executions: typing.Union[int, float] = None,
  runtime: str = None,
  runtime_management_config: LambdaFunctionRuntimeManagementConfig = None,
  snap_start: LambdaFunctionSnapStart = None,
  tags: IResolvable | typing.List[LambdaFunctionTags] = None,
  tenancy_config: LambdaFunctionTenancyConfig = None,
  timeout: typing.Union[int, float] = None,
  tracing_config: LambdaFunctionTracingConfig = None,
  vpc_config: LambdaFunctionVpcConfig = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | The code for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.role">role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the function's execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.architectures">architectures</a></code> | <code>typing.List[str]</code> | The instruction set architecture that the function supports. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.capacityProviderConfig">capacity_provider_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | Configuration for the capacity provider that manages compute resources for Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | To enable code signing for this function, specify the ARN of a code-signing configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.durableConfig">durable_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | Environment variables that are accessible from function code during execution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | The size of the function's ``/tmp`` directory in MB. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfigs">file_system_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]</code> | Connection settings for an Amazon EFS or Amazon S3 Files file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function, up to 64 characters in length. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.handler">handler</a></code> | <code>str</code> | The name of the method within your code that Lambda calls to run your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.layers">layers</a></code> | <code>typing.List[str]</code> | A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | The function's Amazon CloudWatch Logs configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.packageType">package_type</a></code> | <code>str</code> | The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.publishToLatestPublished">publish_to_latest_published</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.recursiveLoop">recursive_loop</a></code> | <code>str</code> | The status of your function's recursive loop detection configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | The number of simultaneous executions to reserve for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.runtime">runtime</a></code> | <code>str</code> | The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.runtimeManagementConfig">runtime_management_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart">snap_start</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]</code> | A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tenancyConfig">tenancy_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | The function's tenant isolation configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time (in seconds) that Lambda allows a function to run before stopping it. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.code"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

The code for the function.

You can define your function code in multiple ways:

* For .zip deployment packages, you can specify the S3 location of the .zip file in the `S3Bucket`, `S3Key`, and `S3ObjectVersion` properties.
* For .zip deployment packages, you can alternatively define the function code inline in the `ZipFile` property. This method works only for Node.js and Python functions.
* For container images, specify the URI of your container image in the ECR registry in the `ImageUri` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#code LambdaFunction#code}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.role"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the function's execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#role LambdaFunction#role}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.architectures"></a>

- *Type:* typing.List[str]

The instruction set architecture that the function supports.

Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}

---

##### `capacity_provider_config`<sup>Optional</sup> <a name="capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.capacityProviderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

Configuration for the capacity provider that manages compute resources for Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#capacity_provider_config LambdaFunction#capacity_provider_config}

---

##### `code_signing_config_arn`<sup>Optional</sup> <a name="code_signing_config_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.codeSigningConfigArn"></a>

- *Type:* str

To enable code signing for this function, specify the ARN of a code-signing configuration.

A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.deadLetterConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.

For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.description"></a>

- *Type:* str

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#description LambdaFunction#description}

---

##### `durable_config`<sup>Optional</sup> <a name="durable_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.durableConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#durable_config LambdaFunction#durable_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.environment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

Environment variables that are accessible from function code during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.ephemeralStorage"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

The size of the function's ``/tmp`` directory in MB.

The default value is 512, but it can be any whole number between 512 and 10,240 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `file_system_configs`<sup>Optional</sup> <a name="file_system_configs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.fileSystemConfigs"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]

Connection settings for an Amazon EFS or Amazon S3 Files file system.

To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
For more information about using the `DependsOn` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#file_system_configs LambdaFunction#file_system_configs}

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.functionName"></a>

- *Type:* str

The name of the Lambda function, up to 64 characters in length.

If you don't specify a name, CFN generates one.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}

---

##### `function_scaling_config`<sup>Optional</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.functionScalingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#function_scaling_config LambdaFunction#function_scaling_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.handler"></a>

- *Type:* str

The name of the method within your code that Lambda calls to run your function.

Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#handler LambdaFunction#handler}

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.imageConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.kmsKeyArn"></a>

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.layers"></a>

- *Type:* typing.List[str]

A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#layers LambdaFunction#layers}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.loggingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

The function's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}

---

##### `memory_size`<sup>Optional</sup> <a name="memory_size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.memorySize"></a>

- *Type:* typing.Union[int, float]

The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.packageType"></a>

- *Type:* str

The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}

---

##### `publish_to_latest_published`<sup>Optional</sup> <a name="publish_to_latest_published" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.publishToLatestPublished"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}.

---

##### `recursive_loop`<sup>Optional</sup> <a name="recursive_loop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.recursiveLoop"></a>

- *Type:* str

The status of your function's recursive loop detection configuration.

When this value is set to `Allow`and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#recursive_loop LambdaFunction#recursive_loop}

---

##### `reserved_concurrent_executions`<sup>Optional</sup> <a name="reserved_concurrent_executions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.reservedConcurrentExecutions"></a>

- *Type:* typing.Union[int, float]

The number of simultaneous executions to reserve for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.runtime"></a>

- *Type:* str

The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}

---

##### `runtime_management_config`<sup>Optional</sup> <a name="runtime_management_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.runtimeManagementConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime_management_config LambdaFunction#runtime_management_config}

---

##### `snap_start`<sup>Optional</sup> <a name="snap_start" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.snapStart"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]

A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tags LambdaFunction#tags}

---

##### `tenancy_config`<sup>Optional</sup> <a name="tenancy_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tenancyConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

The function's tenant isolation configuration settings.

Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tenancy_config LambdaFunction#tenancy_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

The amount of time (in seconds) that Lambda allows a function to run before stopping it.

The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.tracingConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.Initializer.parameter.vpcConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.

When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig">put_capacity_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode">put_code</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig">put_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig">put_durable_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment">put_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage">put_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs">put_file_system_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig">put_function_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig">put_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig">put_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig">put_runtime_management_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart">put_snap_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig">put_tenancy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig">put_tracing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig">put_vpc_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures">reset_architectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig">reset_capacity_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn">reset_code_signing_config_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig">reset_dead_letter_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig">reset_durable_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment">reset_environment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage">reset_ephemeral_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs">reset_file_system_configs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName">reset_function_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig">reset_function_scaling_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler">reset_handler</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig">reset_image_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn">reset_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers">reset_layers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig">reset_logging_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize">reset_memory_size</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType">reset_package_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished">reset_publish_to_latest_published</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop">reset_recursive_loop</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions">reset_reserved_concurrent_executions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime">reset_runtime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig">reset_runtime_management_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart">reset_snap_start</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig">reset_tenancy_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig">reset_tracing_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig">reset_vpc_config</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_capacity_provider_config` <a name="put_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig"></a>

```python
def put_capacity_provider_config(
  lambda_managed_instances_capacity_provider_config: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig = None
) -> None
```

###### `lambda_managed_instances_capacity_provider_config`<sup>Optional</sup> <a name="lambda_managed_instances_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCapacityProviderConfig.parameter.lambdaManagedInstancesCapacityProviderConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

Configuration for Lambda-managed instances used by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config LambdaFunction#lambda_managed_instances_capacity_provider_config}

---

##### `put_code` <a name="put_code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode"></a>

```python
def put_code(
  image_uri: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_storage_mode: str = None,
  s3_object_version: str = None,
  source_kms_key_arn: str = None,
  zip_file: str = None
) -> None
```

###### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.imageUri"></a>

- *Type:* str

URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}

---

###### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.s3Bucket"></a>

- *Type:* str

An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}

---

###### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.s3Key"></a>

- *Type:* str

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}

---

###### `s3_object_storage_mode`<sup>Optional</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.s3ObjectStorageMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}.

---

###### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.s3ObjectVersion"></a>

- *Type:* str

For versioned objects, the version of the deployment package object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}

---

###### `source_kms_key_arn`<sup>Optional</sup> <a name="source_kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.sourceKmsKeyArn"></a>

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#source_kms_key_arn LambdaFunction#source_kms_key_arn}

---

###### `zip_file`<sup>Optional</sup> <a name="zip_file" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putCode.parameter.zipFile"></a>

- *Type:* str

(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#zip_file LambdaFunction#zip_file}

---

##### `put_dead_letter_config` <a name="put_dead_letter_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig"></a>

```python
def put_dead_letter_config(
  target_arn: str = None
) -> None
```

###### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDeadLetterConfig.parameter.targetArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}

---

##### `put_durable_config` <a name="put_durable_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig"></a>

```python
def put_durable_config(
  execution_timeout: typing.Union[int, float] = None,
  retention_period_in_days: typing.Union[int, float] = None
) -> None
```

###### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig.parameter.executionTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time (in seconds) that a durable execution can run before timing out.

This timeout applies to the entire durable execution, not individual function invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#execution_timeout LambdaFunction#execution_timeout}

---

###### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putDurableConfig.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

The number of days to retain execution history after a durable execution completes.

After this period, execution history is no longer available through the GetDurableExecutionHistory API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#retention_period_in_days LambdaFunction#retention_period_in_days}

---

##### `put_environment` <a name="put_environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment"></a>

```python
def put_environment(
  variables: typing.Mapping[str] = None
) -> None
```

###### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEnvironment.parameter.variables"></a>

- *Type:* typing.Mapping[str]

Environment variable key-value pairs.

For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
If the value of the environment variable is a time or a duration, enclose the value in quotes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#variables LambdaFunction#variables}

---

##### `put_ephemeral_storage` <a name="put_ephemeral_storage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage"></a>

```python
def put_ephemeral_storage(
  size: typing.Union[int, float] = None
) -> None
```

###### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putEphemeralStorage.parameter.size"></a>

- *Type:* typing.Union[int, float]

The size of the function's ``/tmp`` directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#size LambdaFunction#size}

---

##### `put_file_system_configs` <a name="put_file_system_configs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs"></a>

```python
def put_file_system_configs(
  value: IResolvable | typing.List[LambdaFunctionFileSystemConfigs]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFileSystemConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]

---

##### `put_function_scaling_config` <a name="put_function_scaling_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig"></a>

```python
def put_function_scaling_config(
  max_execution_environments: typing.Union[int, float] = None,
  min_execution_environments: typing.Union[int, float] = None
) -> None
```

###### `max_execution_environments`<sup>Optional</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig.parameter.maxExecutionEnvironments"></a>

- *Type:* typing.Union[int, float]

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#max_execution_environments LambdaFunction#max_execution_environments}

---

###### `min_execution_environments`<sup>Optional</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putFunctionScalingConfig.parameter.minExecutionEnvironments"></a>

- *Type:* typing.Union[int, float]

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#min_execution_environments LambdaFunction#min_execution_environments}

---

##### `put_image_config` <a name="put_image_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig"></a>

```python
def put_image_config(
  command: typing.List[str] = None,
  entry_point: typing.List[str] = None,
  working_directory: str = None
) -> None
```

###### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig.parameter.command"></a>

- *Type:* typing.List[str]

Specifies parameters that you want to pass in with ENTRYPOINT.

You can specify a maximum of 1,500 parameters in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#command LambdaFunction#command}

---

###### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig.parameter.entryPoint"></a>

- *Type:* typing.List[str]

Specifies the entry point to their application, which is typically the location of the runtime executable.

You can specify a maximum of 1,500 string entries in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}

---

###### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putImageConfig.parameter.workingDirectory"></a>

- *Type:* str

Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}

---

##### `put_logging_config` <a name="put_logging_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig"></a>

```python
def put_logging_config(
  application_log_level: str = None,
  log_format: str = None,
  log_group: str = None,
  system_log_level: str = None
) -> None
```

###### `application_log_level`<sup>Optional</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.applicationLogLevel"></a>

- *Type:* str

Set this property to filter the application logs for your function that Lambda sends to CloudWatch.

Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}

---

###### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.logFormat"></a>

- *Type:* str

The format in which Lambda sends your function's application and system logs to CloudWatch.

Select between plain text and structured JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.logGroup"></a>

- *Type:* str

The name of the Amazon CloudWatch log group the function sends logs to.

By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>`. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}

---

###### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putLoggingConfig.parameter.systemLogLevel"></a>

- *Type:* str

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}

---

##### `put_runtime_management_config` <a name="put_runtime_management_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig"></a>

```python
def put_runtime_management_config(
  runtime_version_arn: str = None,
  update_runtime_on: str = None
) -> None
```

###### `runtime_version_arn`<sup>Optional</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig.parameter.runtimeVersionArn"></a>

- *Type:* str

The ARN of the runtime version you want the function to use.

This is only required if you're using the *Manual* runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime_version_arn LambdaFunction#runtime_version_arn}

---

###### `update_runtime_on`<sup>Optional</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putRuntimeManagementConfig.parameter.updateRuntimeOn"></a>

- *Type:* str

Specify the runtime update mode.

* *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
* *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
* *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).

*Valid Values*: `Auto` | `FunctionUpdate` | `Manual`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#update_runtime_on LambdaFunction#update_runtime_on}

---

##### `put_snap_start` <a name="put_snap_start" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart"></a>

```python
def put_snap_start(
  apply_on: str = None
) -> None
```

###### `apply_on`<sup>Optional</sup> <a name="apply_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putSnapStart.parameter.applyOn"></a>

- *Type:* str

Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LambdaFunctionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]

---

##### `put_tenancy_config` <a name="put_tenancy_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig"></a>

```python
def put_tenancy_config(
  tenant_isolation_mode: str = None
) -> None
```

###### `tenant_isolation_mode`<sup>Optional</sup> <a name="tenant_isolation_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTenancyConfig.parameter.tenantIsolationMode"></a>

- *Type:* str

Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tenant_isolation_mode LambdaFunction#tenant_isolation_mode}

---

##### `put_tracing_config` <a name="put_tracing_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig"></a>

```python
def put_tracing_config(
  mode: str = None
) -> None
```

###### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putTracingConfig.parameter.mode"></a>

- *Type:* str

The tracing mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#mode LambdaFunction#mode}

---

##### `put_vpc_config` <a name="put_vpc_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig"></a>

```python
def put_vpc_config(
  ipv6_allowed_for_dual_stack: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `ipv6_allowed_for_dual_stack`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig.parameter.ipv6AllowedForDualStack"></a>

- *Type:* bool | cdktn.IResolvable

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#ipv_6_allowed_for_dual_stack LambdaFunction#ipv_6_allowed_for_dual_stack}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

A list of VPC security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.putVpcConfig.parameter.subnetIds"></a>

- *Type:* typing.List[str]

A list of VPC subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}

---

##### `reset_architectures` <a name="reset_architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetArchitectures"></a>

```python
def reset_architectures() -> None
```

##### `reset_capacity_provider_config` <a name="reset_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCapacityProviderConfig"></a>

```python
def reset_capacity_provider_config() -> None
```

##### `reset_code_signing_config_arn` <a name="reset_code_signing_config_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetCodeSigningConfigArn"></a>

```python
def reset_code_signing_config_arn() -> None
```

##### `reset_dead_letter_config` <a name="reset_dead_letter_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDeadLetterConfig"></a>

```python
def reset_dead_letter_config() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_durable_config` <a name="reset_durable_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetDurableConfig"></a>

```python
def reset_durable_config() -> None
```

##### `reset_environment` <a name="reset_environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEnvironment"></a>

```python
def reset_environment() -> None
```

##### `reset_ephemeral_storage` <a name="reset_ephemeral_storage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetEphemeralStorage"></a>

```python
def reset_ephemeral_storage() -> None
```

##### `reset_file_system_configs` <a name="reset_file_system_configs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFileSystemConfigs"></a>

```python
def reset_file_system_configs() -> None
```

##### `reset_function_name` <a name="reset_function_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionName"></a>

```python
def reset_function_name() -> None
```

##### `reset_function_scaling_config` <a name="reset_function_scaling_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetFunctionScalingConfig"></a>

```python
def reset_function_scaling_config() -> None
```

##### `reset_handler` <a name="reset_handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetHandler"></a>

```python
def reset_handler() -> None
```

##### `reset_image_config` <a name="reset_image_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetImageConfig"></a>

```python
def reset_image_config() -> None
```

##### `reset_kms_key_arn` <a name="reset_kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetKmsKeyArn"></a>

```python
def reset_kms_key_arn() -> None
```

##### `reset_layers` <a name="reset_layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLayers"></a>

```python
def reset_layers() -> None
```

##### `reset_logging_config` <a name="reset_logging_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetLoggingConfig"></a>

```python
def reset_logging_config() -> None
```

##### `reset_memory_size` <a name="reset_memory_size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetMemorySize"></a>

```python
def reset_memory_size() -> None
```

##### `reset_package_type` <a name="reset_package_type" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPackageType"></a>

```python
def reset_package_type() -> None
```

##### `reset_publish_to_latest_published` <a name="reset_publish_to_latest_published" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetPublishToLatestPublished"></a>

```python
def reset_publish_to_latest_published() -> None
```

##### `reset_recursive_loop` <a name="reset_recursive_loop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRecursiveLoop"></a>

```python
def reset_recursive_loop() -> None
```

##### `reset_reserved_concurrent_executions` <a name="reset_reserved_concurrent_executions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetReservedConcurrentExecutions"></a>

```python
def reset_reserved_concurrent_executions() -> None
```

##### `reset_runtime` <a name="reset_runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntime"></a>

```python
def reset_runtime() -> None
```

##### `reset_runtime_management_config` <a name="reset_runtime_management_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetRuntimeManagementConfig"></a>

```python
def reset_runtime_management_config() -> None
```

##### `reset_snap_start` <a name="reset_snap_start" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetSnapStart"></a>

```python
def reset_snap_start() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tenancy_config` <a name="reset_tenancy_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTenancyConfig"></a>

```python
def reset_tenancy_config() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_tracing_config` <a name="reset_tracing_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetTracingConfig"></a>

```python
def reset_tracing_config() -> None
```

##### `reset_vpc_config` <a name="reset_vpc_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.resetVpcConfig"></a>

```python
def reset_vpc_config() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LambdaFunction resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LambdaFunction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LambdaFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LambdaFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig">capacity_provider_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig">durable_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs">file_system_configs</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig">runtime_management_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart">snap_start</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse">snap_start_response</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig">tenancy_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput">architectures_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput">capacity_provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput">code_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput">code_signing_config_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput">dead_letter_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput">durable_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput">environment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput">ephemeral_storage_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput">file_system_configs_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput">function_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput">function_scaling_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput">handler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput">image_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput">layers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput">logging_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput">memory_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput">package_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput">publish_to_latest_published_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput">recursive_loop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput">reserved_concurrent_executions_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput">runtime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput">runtime_management_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput">snap_start_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput">tenancy_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput">tracing_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput">vpc_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName">function_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler">handler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers">layers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType">package_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished">publish_to_latest_published</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop">recursive_loop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime">runtime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `capacity_provider_config`<sup>Required</sup> <a name="capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfig"></a>

```python
capacity_provider_config: LambdaFunctionCapacityProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigOutputReference</a>

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.code"></a>

```python
code: LambdaFunctionCodeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference">LambdaFunctionCodeOutputReference</a>

---

##### `dead_letter_config`<sup>Required</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfig"></a>

```python
dead_letter_config: LambdaFunctionDeadLetterConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference">LambdaFunctionDeadLetterConfigOutputReference</a>

---

##### `durable_config`<sup>Required</sup> <a name="durable_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfig"></a>

```python
durable_config: LambdaFunctionDurableConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference">LambdaFunctionDurableConfigOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environment"></a>

```python
environment: LambdaFunctionEnvironmentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference">LambdaFunctionEnvironmentOutputReference</a>

---

##### `ephemeral_storage`<sup>Required</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorage"></a>

```python
ephemeral_storage: LambdaFunctionEphemeralStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference">LambdaFunctionEphemeralStorageOutputReference</a>

---

##### `file_system_configs`<sup>Required</sup> <a name="file_system_configs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigs"></a>

```python
file_system_configs: LambdaFunctionFileSystemConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList">LambdaFunctionFileSystemConfigsList</a>

---

##### `function_scaling_config`<sup>Required</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfig"></a>

```python
function_scaling_config: LambdaFunctionFunctionScalingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference">LambdaFunctionFunctionScalingConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_config`<sup>Required</sup> <a name="image_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfig"></a>

```python
image_config: LambdaFunctionImageConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference">LambdaFunctionImageConfigOutputReference</a>

---

##### `logging_config`<sup>Required</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfig"></a>

```python
logging_config: LambdaFunctionLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference">LambdaFunctionLoggingConfigOutputReference</a>

---

##### `runtime_management_config`<sup>Required</sup> <a name="runtime_management_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfig"></a>

```python
runtime_management_config: LambdaFunctionRuntimeManagementConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference">LambdaFunctionRuntimeManagementConfigOutputReference</a>

---

##### `snap_start`<sup>Required</sup> <a name="snap_start" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStart"></a>

```python
snap_start: LambdaFunctionSnapStartOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference">LambdaFunctionSnapStartOutputReference</a>

---

##### `snap_start_response`<sup>Required</sup> <a name="snap_start_response" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartResponse"></a>

```python
snap_start_response: LambdaFunctionSnapStartResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference">LambdaFunctionSnapStartResponseOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tags"></a>

```python
tags: LambdaFunctionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList">LambdaFunctionTagsList</a>

---

##### `tenancy_config`<sup>Required</sup> <a name="tenancy_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfig"></a>

```python
tenancy_config: LambdaFunctionTenancyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference">LambdaFunctionTenancyConfigOutputReference</a>

---

##### `tracing_config`<sup>Required</sup> <a name="tracing_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfig"></a>

```python
tracing_config: LambdaFunctionTracingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference">LambdaFunctionTracingConfigOutputReference</a>

---

##### `vpc_config`<sup>Required</sup> <a name="vpc_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfig"></a>

```python
vpc_config: LambdaFunctionVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference">LambdaFunctionVpcConfigOutputReference</a>

---

##### `architectures_input`<sup>Optional</sup> <a name="architectures_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architecturesInput"></a>

```python
architectures_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `capacity_provider_config_input`<sup>Optional</sup> <a name="capacity_provider_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.capacityProviderConfigInput"></a>

```python
capacity_provider_config_input: IResolvable | LambdaFunctionCapacityProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---

##### `code_input`<sup>Optional</sup> <a name="code_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeInput"></a>

```python
code_input: IResolvable | LambdaFunctionCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---

##### `code_signing_config_arn_input`<sup>Optional</sup> <a name="code_signing_config_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArnInput"></a>

```python
code_signing_config_arn_input: str
```

- *Type:* str

---

##### `dead_letter_config_input`<sup>Optional</sup> <a name="dead_letter_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.deadLetterConfigInput"></a>

```python
dead_letter_config_input: IResolvable | LambdaFunctionDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `durable_config_input`<sup>Optional</sup> <a name="durable_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.durableConfigInput"></a>

```python
durable_config_input: IResolvable | LambdaFunctionDurableConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.environmentInput"></a>

```python
environment_input: IResolvable | LambdaFunctionEnvironment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---

##### `ephemeral_storage_input`<sup>Optional</sup> <a name="ephemeral_storage_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.ephemeralStorageInput"></a>

```python
ephemeral_storage_input: IResolvable | LambdaFunctionEphemeralStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---

##### `file_system_configs_input`<sup>Optional</sup> <a name="file_system_configs_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.fileSystemConfigsInput"></a>

```python
file_system_configs_input: IResolvable | typing.List[LambdaFunctionFileSystemConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]

---

##### `function_name_input`<sup>Optional</sup> <a name="function_name_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionNameInput"></a>

```python
function_name_input: str
```

- *Type:* str

---

##### `function_scaling_config_input`<sup>Optional</sup> <a name="function_scaling_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionScalingConfigInput"></a>

```python
function_scaling_config_input: IResolvable | LambdaFunctionFunctionScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---

##### `handler_input`<sup>Optional</sup> <a name="handler_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handlerInput"></a>

```python
handler_input: str
```

- *Type:* str

---

##### `image_config_input`<sup>Optional</sup> <a name="image_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.imageConfigInput"></a>

```python
image_config_input: IResolvable | LambdaFunctionImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `layers_input`<sup>Optional</sup> <a name="layers_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layersInput"></a>

```python
layers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `logging_config_input`<sup>Optional</sup> <a name="logging_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.loggingConfigInput"></a>

```python
logging_config_input: IResolvable | LambdaFunctionLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---

##### `memory_size_input`<sup>Optional</sup> <a name="memory_size_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySizeInput"></a>

```python
memory_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_type_input`<sup>Optional</sup> <a name="package_type_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageTypeInput"></a>

```python
package_type_input: str
```

- *Type:* str

---

##### `publish_to_latest_published_input`<sup>Optional</sup> <a name="publish_to_latest_published_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublishedInput"></a>

```python
publish_to_latest_published_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recursive_loop_input`<sup>Optional</sup> <a name="recursive_loop_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoopInput"></a>

```python
recursive_loop_input: str
```

- *Type:* str

---

##### `reserved_concurrent_executions_input`<sup>Optional</sup> <a name="reserved_concurrent_executions_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutionsInput"></a>

```python
reserved_concurrent_executions_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `runtime_input`<sup>Optional</sup> <a name="runtime_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeInput"></a>

```python
runtime_input: str
```

- *Type:* str

---

##### `runtime_management_config_input`<sup>Optional</sup> <a name="runtime_management_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtimeManagementConfigInput"></a>

```python
runtime_management_config_input: IResolvable | LambdaFunctionRuntimeManagementConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---

##### `snap_start_input`<sup>Optional</sup> <a name="snap_start_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.snapStartInput"></a>

```python
snap_start_input: IResolvable | LambdaFunctionSnapStart
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LambdaFunctionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]

---

##### `tenancy_config_input`<sup>Optional</sup> <a name="tenancy_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tenancyConfigInput"></a>

```python
tenancy_config_input: IResolvable | LambdaFunctionTenancyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tracing_config_input`<sup>Optional</sup> <a name="tracing_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tracingConfigInput"></a>

```python
tracing_config_input: IResolvable | LambdaFunctionTracingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---

##### `vpc_config_input`<sup>Optional</sup> <a name="vpc_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.vpcConfigInput"></a>

```python
vpc_config_input: IResolvable | LambdaFunctionVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---

##### `architectures`<sup>Required</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `code_signing_config_arn`<sup>Required</sup> <a name="code_signing_config_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.codeSigningConfigArn"></a>

```python
code_signing_config_arn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `function_name`<sup>Required</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.handler"></a>

```python
handler: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `layers`<sup>Required</sup> <a name="layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.layers"></a>

```python
layers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `memory_size`<sup>Required</sup> <a name="memory_size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `package_type`<sup>Required</sup> <a name="package_type" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

---

##### `publish_to_latest_published`<sup>Required</sup> <a name="publish_to_latest_published" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.publishToLatestPublished"></a>

```python
publish_to_latest_published: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `recursive_loop`<sup>Required</sup> <a name="recursive_loop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.recursiveLoop"></a>

```python
recursive_loop: str
```

- *Type:* str

---

##### `reserved_concurrent_executions`<sup>Required</sup> <a name="reserved_concurrent_executions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.reservedConcurrentExecutions"></a>

```python
reserved_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaFunctionCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCapacityProviderConfig(
  lambda_managed_instances_capacity_provider_config: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig">lambda_managed_instances_capacity_provider_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | Configuration for Lambda-managed instances used by the capacity provider. |

---

##### `lambda_managed_instances_capacity_provider_config`<sup>Optional</sup> <a name="lambda_managed_instances_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```python
lambda_managed_instances_capacity_provider_config: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

Configuration for Lambda-managed instances used by the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#lambda_managed_instances_capacity_provider_config LambdaFunction#lambda_managed_instances_capacity_provider_config}

---

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig(
  capacity_provider_arn: str = None,
  execution_environment_memory_gi_b_per_v_cpu: typing.Union[int, float] = None,
  per_execution_environment_max_concurrency: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn">capacity_provider_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the capacity provider. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu">execution_environment_memory_gi_b_per_v_cpu</a></code> | <code>typing.Union[int, float]</code> | The amount of memory in GiB allocated per vCPU for execution environments. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency">per_execution_environment_max_concurrency</a></code> | <code>typing.Union[int, float]</code> | The maximum number of concurrent executions that can run on each execution environment. |

---

##### `capacity_provider_arn`<sup>Optional</sup> <a name="capacity_provider_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.capacityProviderArn"></a>

```python
capacity_provider_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#capacity_provider_arn LambdaFunction#capacity_provider_arn}

---

##### `execution_environment_memory_gi_b_per_v_cpu`<sup>Optional</sup> <a name="execution_environment_memory_gi_b_per_v_cpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```python
execution_environment_memory_gi_b_per_v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory in GiB allocated per vCPU for execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#execution_environment_memory_gi_b_per_v_cpu LambdaFunction#execution_environment_memory_gi_b_per_v_cpu}

---

##### `per_execution_environment_max_concurrency`<sup>Optional</sup> <a name="per_execution_environment_max_concurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig.property.perExecutionEnvironmentMaxConcurrency"></a>

```python
per_execution_environment_max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of concurrent executions that can run on each execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#per_execution_environment_max_concurrency LambdaFunction#per_execution_environment_max_concurrency}

---

### LambdaFunctionCode <a name="LambdaFunctionCode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCode(
  image_uri: str = None,
  s3_bucket: str = None,
  s3_key: str = None,
  s3_object_storage_mode: str = None,
  s3_object_version: str = None,
  source_kms_key_arn: str = None,
  zip_file: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri">image_uri</a></code> | <code>str</code> | URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key">s3_key</a></code> | <code>str</code> | The Amazon S3 key of the deployment package. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode">s3_object_storage_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | For versioned objects, the version of the deployment package object to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn">source_kms_key_arn</a></code> | <code>str</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile">zip_file</a></code> | <code>str</code> | (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details. |

---

##### `image_uri`<sup>Optional</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}

---

##### `s3_bucket`<sup>Optional</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}

---

##### `s3_key`<sup>Optional</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

The Amazon S3 key of the deployment package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}

---

##### `s3_object_storage_mode`<sup>Optional</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectStorageMode"></a>

```python
s3_object_storage_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_object_storage_mode LambdaFunction#s3_object_storage_mode}.

---

##### `s3_object_version`<sup>Optional</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

For versioned objects, the version of the deployment package object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}

---

##### `source_kms_key_arn`<sup>Optional</sup> <a name="source_kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.sourceKmsKeyArn"></a>

```python
source_kms_key_arn: str
```

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#source_kms_key_arn LambdaFunction#source_kms_key_arn}

---

##### `zip_file`<sup>Optional</sup> <a name="zip_file" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode.property.zipFile"></a>

```python
zip_file: str
```

- *Type:* str

(Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.   When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.  When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).    For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.  If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#zip_file LambdaFunction#zip_file}

---

### LambdaFunctionConfig <a name="LambdaFunctionConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  code: LambdaFunctionCode,
  role: str,
  architectures: typing.List[str] = None,
  capacity_provider_config: LambdaFunctionCapacityProviderConfig = None,
  code_signing_config_arn: str = None,
  dead_letter_config: LambdaFunctionDeadLetterConfig = None,
  description: str = None,
  durable_config: LambdaFunctionDurableConfig = None,
  environment: LambdaFunctionEnvironment = None,
  ephemeral_storage: LambdaFunctionEphemeralStorage = None,
  file_system_configs: IResolvable | typing.List[LambdaFunctionFileSystemConfigs] = None,
  function_name: str = None,
  function_scaling_config: LambdaFunctionFunctionScalingConfig = None,
  handler: str = None,
  image_config: LambdaFunctionImageConfig = None,
  kms_key_arn: str = None,
  layers: typing.List[str] = None,
  logging_config: LambdaFunctionLoggingConfig = None,
  memory_size: typing.Union[int, float] = None,
  package_type: str = None,
  publish_to_latest_published: bool | IResolvable = None,
  recursive_loop: str = None,
  reserved_concurrent_executions: typing.Union[int, float] = None,
  runtime: str = None,
  runtime_management_config: LambdaFunctionRuntimeManagementConfig = None,
  snap_start: LambdaFunctionSnapStart = None,
  tags: IResolvable | typing.List[LambdaFunctionTags] = None,
  tenancy_config: LambdaFunctionTenancyConfig = None,
  timeout: typing.Union[int, float] = None,
  tracing_config: LambdaFunctionTracingConfig = None,
  vpc_config: LambdaFunctionVpcConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code">code</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | The code for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role">role</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the function's execution role. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures">architectures</a></code> | <code>typing.List[str]</code> | The instruction set architecture that the function supports. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig">capacity_provider_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | Configuration for the capacity provider that manages compute resources for Lambda functions. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn">code_signing_config_arn</a></code> | <code>str</code> | To enable code signing for this function, specify the ARN of a code-signing configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig">dead_letter_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description">description</a></code> | <code>str</code> | A description of the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig">durable_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment">environment</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | Environment variables that are accessible from function code during execution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage">ephemeral_storage</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | The size of the function's ``/tmp`` directory in MB. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs">file_system_configs</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]</code> | Connection settings for an Amazon EFS or Amazon S3 Files file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName">function_name</a></code> | <code>str</code> | The name of the Lambda function, up to 64 characters in length. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig">function_scaling_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler">handler</a></code> | <code>str</code> | The name of the method within your code that Lambda calls to run your function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig">image_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers">layers</a></code> | <code>typing.List[str]</code> | A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig">logging_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | The function's Amazon CloudWatch Logs configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize">memory_size</a></code> | <code>typing.Union[int, float]</code> | The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType">package_type</a></code> | <code>str</code> | The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished">publish_to_latest_published</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop">recursive_loop</a></code> | <code>str</code> | The status of your function's recursive loop detection configuration. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions">reserved_concurrent_executions</a></code> | <code>typing.Union[int, float]</code> | The number of simultaneous executions to reserve for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime">runtime</a></code> | <code>str</code> | The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig">runtime_management_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart">snap_start</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]</code> | A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig">tenancy_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | The function's tenant isolation configuration settings. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | The amount of time (in seconds) that Lambda allows a function to run before stopping it. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig">tracing_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html). |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig">vpc_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.code"></a>

```python
code: LambdaFunctionCode
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

The code for the function.

You can define your function code in multiple ways:

* For .zip deployment packages, you can specify the S3 location of the .zip file in the `S3Bucket`, `S3Key`, and `S3ObjectVersion` properties.
* For .zip deployment packages, you can alternatively define the function code inline in the `ZipFile` property. This method works only for Node.js and Python functions.
* For container images, specify the URI of your container image in the ECR registry in the `ImageUri` property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#code LambdaFunction#code}

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.role"></a>

```python
role: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the function's execution role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#role LambdaFunction#role}

---

##### `architectures`<sup>Optional</sup> <a name="architectures" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.architectures"></a>

```python
architectures: typing.List[str]
```

- *Type:* typing.List[str]

The instruction set architecture that the function supports.

Enter a string array with one of the valid values (arm64 or x86_64). The default value is `x86_64`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}

---

##### `capacity_provider_config`<sup>Optional</sup> <a name="capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.capacityProviderConfig"></a>

```python
capacity_provider_config: LambdaFunctionCapacityProviderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

Configuration for the capacity provider that manages compute resources for Lambda functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#capacity_provider_config LambdaFunction#capacity_provider_config}

---

##### `code_signing_config_arn`<sup>Optional</sup> <a name="code_signing_config_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.codeSigningConfigArn"></a>

```python
code_signing_config_arn: str
```

- *Type:* str

To enable code signing for this function, specify the ARN of a code-signing configuration.

A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}

---

##### `dead_letter_config`<sup>Optional</sup> <a name="dead_letter_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.deadLetterConfig"></a>

```python
dead_letter_config: LambdaFunctionDeadLetterConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.

For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#description LambdaFunction#description}

---

##### `durable_config`<sup>Optional</sup> <a name="durable_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.durableConfig"></a>

```python
durable_config: LambdaFunctionDurableConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout and retention period for execution history.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#durable_config LambdaFunction#durable_config}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.environment"></a>

```python
environment: LambdaFunctionEnvironment
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

Environment variables that are accessible from function code during execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#environment LambdaFunction#environment}

---

##### `ephemeral_storage`<sup>Optional</sup> <a name="ephemeral_storage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.ephemeralStorage"></a>

```python
ephemeral_storage: LambdaFunctionEphemeralStorage
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

The size of the function's ``/tmp`` directory in MB.

The default value is 512, but it can be any whole number between 512 and 10,240 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}

---

##### `file_system_configs`<sup>Optional</sup> <a name="file_system_configs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.fileSystemConfigs"></a>

```python
file_system_configs: IResolvable | typing.List[LambdaFunctionFileSystemConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]

Connection settings for an Amazon EFS or Amazon S3 Files file system.

To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a `DependsOn` attribute to ensure that the mount target is created or updated before the function.
For more information about using the `DependsOn` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#file_system_configs LambdaFunction#file_system_configs}

---

##### `function_name`<sup>Optional</sup> <a name="function_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionName"></a>

```python
function_name: str
```

- *Type:* str

The name of the Lambda function, up to 64 characters in length.

If you don't specify a name, CFN generates one.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}

---

##### `function_scaling_config`<sup>Optional</sup> <a name="function_scaling_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.functionScalingConfig"></a>

```python
function_scaling_config: LambdaFunctionFunctionScalingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#function_scaling_config LambdaFunction#function_scaling_config}

---

##### `handler`<sup>Optional</sup> <a name="handler" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.handler"></a>

```python
handler: str
```

- *Type:* str

The name of the method within your code that Lambda calls to run your function.

Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#handler LambdaFunction#handler}

---

##### `image_config`<sup>Optional</sup> <a name="image_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.imageConfig"></a>

```python
image_config: LambdaFunctionImageConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}

---

##### `kms_key_arn`<sup>Optional</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:   +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).   +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.   +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).   +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).     If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}

---

##### `layers`<sup>Optional</sup> <a name="layers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.layers"></a>

```python
layers: typing.List[str]
```

- *Type:* typing.List[str]

A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#layers LambdaFunction#layers}

---

##### `logging_config`<sup>Optional</sup> <a name="logging_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.loggingConfig"></a>

```python
logging_config: LambdaFunctionLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

The function's Amazon CloudWatch Logs configuration settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}

---

##### `memory_size`<sup>Optional</sup> <a name="memory_size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.memorySize"></a>

```python
memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}

---

##### `package_type`<sup>Optional</sup> <a name="package_type" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.packageType"></a>

```python
package_type: str
```

- *Type:* str

The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}

---

##### `publish_to_latest_published`<sup>Optional</sup> <a name="publish_to_latest_published" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.publishToLatestPublished"></a>

```python
publish_to_latest_published: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#publish_to_latest_published LambdaFunction#publish_to_latest_published}.

---

##### `recursive_loop`<sup>Optional</sup> <a name="recursive_loop" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.recursiveLoop"></a>

```python
recursive_loop: str
```

- *Type:* str

The status of your function's recursive loop detection configuration.

When this value is set to `Allow`and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
When this value is set to `Terminate` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#recursive_loop LambdaFunction#recursive_loop}

---

##### `reserved_concurrent_executions`<sup>Optional</sup> <a name="reserved_concurrent_executions" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.reservedConcurrentExecutions"></a>

```python
reserved_concurrent_executions: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of simultaneous executions to reserve for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtime"></a>

```python
runtime: str
```

- *Type:* str

The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.  The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).  For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}

---

##### `runtime_management_config`<sup>Optional</sup> <a name="runtime_management_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.runtimeManagementConfig"></a>

```python
runtime_management_config: LambdaFunctionRuntimeManagementConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime_management_config LambdaFunction#runtime_management_config}

---

##### `snap_start`<sup>Optional</sup> <a name="snap_start" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.snapStart"></a>

```python
snap_start: LambdaFunctionSnapStart
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LambdaFunctionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]

A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.   You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tags LambdaFunction#tags}

---

##### `tenancy_config`<sup>Optional</sup> <a name="tenancy_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tenancyConfig"></a>

```python
tenancy_config: LambdaFunctionTenancyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

The function's tenant isolation configuration settings.

Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tenancy_config LambdaFunction#tenancy_config}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of time (in seconds) that Lambda allows a function to run before stopping it.

The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}

---

##### `tracing_config`<sup>Optional</sup> <a name="tracing_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.tracingConfig"></a>

```python
tracing_config: LambdaFunctionTracingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}

---

##### `vpc_config`<sup>Optional</sup> <a name="vpc_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionConfig.property.vpcConfig"></a>

```python
vpc_config: LambdaFunctionVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.

When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}

---

### LambdaFunctionDeadLetterConfig <a name="LambdaFunctionDeadLetterConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionDeadLetterConfig(
  target_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn">target_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic. |

---

##### `target_arn`<sup>Optional</sup> <a name="target_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}

---

### LambdaFunctionDurableConfig <a name="LambdaFunctionDurableConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionDurableConfig(
  execution_timeout: typing.Union[int, float] = None,
  retention_period_in_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout">execution_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time (in seconds) that a durable execution can run before timing out. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | The number of days to retain execution history after a durable execution completes. |

---

##### `execution_timeout`<sup>Optional</sup> <a name="execution_timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.executionTimeout"></a>

```python
execution_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time (in seconds) that a durable execution can run before timing out.

This timeout applies to the entire durable execution, not individual function invocations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#execution_timeout LambdaFunction#execution_timeout}

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of days to retain execution history after a durable execution completes.

After this period, execution history is no longer available through the GetDurableExecutionHistory API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#retention_period_in_days LambdaFunction#retention_period_in_days}

---

### LambdaFunctionEnvironment <a name="LambdaFunctionEnvironment" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionEnvironment(
  variables: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | Environment variable key-value pairs. |

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Environment variable key-value pairs.

For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
If the value of the environment variable is a time or a duration, enclose the value in quotes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#variables LambdaFunction#variables}

---

### LambdaFunctionEphemeralStorage <a name="LambdaFunctionEphemeralStorage" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionEphemeralStorage(
  size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size">size</a></code> | <code>typing.Union[int, float]</code> | The size of the function's ``/tmp`` directory. |

---

##### `size`<sup>Optional</sup> <a name="size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The size of the function's ``/tmp`` directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#size LambdaFunction#size}

---

### LambdaFunctionFileSystemConfigs <a name="LambdaFunctionFileSystemConfigs" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionFileSystemConfigs(
  arn: str = None,
  local_mount_path: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn">arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath">local_mount_path</a></code> | <code>str</code> | The path where the function can access the file system, starting with ``/mnt/``. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.arn"></a>

```python
arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#arn LambdaFunction#arn}

---

##### `local_mount_path`<sup>Optional</sup> <a name="local_mount_path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

The path where the function can access the file system, starting with ``/mnt/``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#local_mount_path LambdaFunction#local_mount_path}

---

### LambdaFunctionFunctionScalingConfig <a name="LambdaFunctionFunctionScalingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionFunctionScalingConfig(
  max_execution_environments: typing.Union[int, float] = None,
  min_execution_environments: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments">max_execution_environments</a></code> | <code>typing.Union[int, float]</code> | The maximum number of execution environments that can be provisioned for the function. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments">min_execution_environments</a></code> | <code>typing.Union[int, float]</code> | The minimum number of execution environments to maintain for the function. |

---

##### `max_execution_environments`<sup>Optional</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.maxExecutionEnvironments"></a>

```python
max_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum number of execution environments that can be provisioned for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#max_execution_environments LambdaFunction#max_execution_environments}

---

##### `min_execution_environments`<sup>Optional</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig.property.minExecutionEnvironments"></a>

```python
min_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The minimum number of execution environments to maintain for the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#min_execution_environments LambdaFunction#min_execution_environments}

---

### LambdaFunctionImageConfig <a name="LambdaFunctionImageConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionImageConfig(
  command: typing.List[str] = None,
  entry_point: typing.List[str] = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command">command</a></code> | <code>typing.List[str]</code> | Specifies parameters that you want to pass in with ENTRYPOINT. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | Specifies the entry point to their application, which is typically the location of the runtime executable. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Specifies the working directory. The length of the directory string cannot exceed 1,000 characters. |

---

##### `command`<sup>Optional</sup> <a name="command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

Specifies parameters that you want to pass in with ENTRYPOINT.

You can specify a maximum of 1,500 parameters in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#command LambdaFunction#command}

---

##### `entry_point`<sup>Optional</sup> <a name="entry_point" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

Specifies the entry point to their application, which is typically the location of the runtime executable.

You can specify a maximum of 1,500 string entries in the list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}

---

### LambdaFunctionLoggingConfig <a name="LambdaFunctionLoggingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionLoggingConfig(
  application_log_level: str = None,
  log_format: str = None,
  log_group: str = None,
  system_log_level: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | Set this property to filter the application logs for your function that Lambda sends to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat">log_format</a></code> | <code>str</code> | The format in which Lambda sends your function's application and system logs to CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup">log_group</a></code> | <code>str</code> | The name of the Amazon CloudWatch log group the function sends logs to. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | Set this property to filter the system logs for your function that Lambda sends to CloudWatch. |

---

##### `application_log_level`<sup>Optional</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

Set this property to filter the application logs for your function that Lambda sends to CloudWatch.

Lambda only sends application logs at the selected level of detail and lower, where `TRACE` is the highest level and `FATAL` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}

---

##### `log_format`<sup>Optional</sup> <a name="log_format" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

The format in which Lambda sends your function's application and system logs to CloudWatch.

Select between plain text and structured JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

The name of the Amazon CloudWatch log group the function sends logs to.

By default, Lambda functions send logs to a default log group named `/aws/lambda/<function name>`. To use a different log group, enter an existing log group or enter a new log group name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}

---

##### `system_log_level`<sup>Optional</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

Set this property to filter the system logs for your function that Lambda sends to CloudWatch.

Lambda only sends system logs at the selected level of detail and lower, where `DEBUG` is the highest level and `WARN` is the lowest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}

---

### LambdaFunctionRuntimeManagementConfig <a name="LambdaFunctionRuntimeManagementConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionRuntimeManagementConfig(
  runtime_version_arn: str = None,
  update_runtime_on: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | The ARN of the runtime version you want the function to use. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn">update_runtime_on</a></code> | <code>str</code> | Specify the runtime update mode. |

---

##### `runtime_version_arn`<sup>Optional</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

The ARN of the runtime version you want the function to use.

This is only required if you're using the *Manual* runtime update mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#runtime_version_arn LambdaFunction#runtime_version_arn}

---

##### `update_runtime_on`<sup>Optional</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig.property.updateRuntimeOn"></a>

```python
update_runtime_on: str
```

- *Type:* str

Specify the runtime update mode.

* *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
* *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
* *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).

*Valid Values*: `Auto` | `FunctionUpdate` | `Manual`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#update_runtime_on LambdaFunction#update_runtime_on}

---

### LambdaFunctionSnapStart <a name="LambdaFunctionSnapStart" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionSnapStart(
  apply_on: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn">apply_on</a></code> | <code>str</code> | Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version. |

---

##### `apply_on`<sup>Optional</sup> <a name="apply_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart.property.applyOn"></a>

```python
apply_on: str
```

- *Type:* str

Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}

---

### LambdaFunctionSnapStartResponse <a name="LambdaFunctionSnapStartResponse" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionSnapStartResponse()
```


### LambdaFunctionTags <a name="LambdaFunctionTags" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key">key</a></code> | <code>str</code> | The key for this tag. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value">value</a></code> | <code>str</code> | The value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#key LambdaFunction#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for this tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#value LambdaFunction#value}

---

### LambdaFunctionTenancyConfig <a name="LambdaFunctionTenancyConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTenancyConfig(
  tenant_isolation_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode">tenant_isolation_mode</a></code> | <code>str</code> | Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID. |

---

##### `tenant_isolation_mode`<sup>Optional</sup> <a name="tenant_isolation_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig.property.tenantIsolationMode"></a>

```python
tenant_isolation_mode: str
```

- *Type:* str

Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#tenant_isolation_mode LambdaFunction#tenant_isolation_mode}

---

### LambdaFunctionTracingConfig <a name="LambdaFunctionTracingConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTracingConfig(
  mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode">mode</a></code> | <code>str</code> | The tracing mode. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

The tracing mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#mode LambdaFunction#mode}

---

### LambdaFunctionVpcConfig <a name="LambdaFunctionVpcConfig" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionVpcConfig(
  ipv6_allowed_for_dual_stack: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack">ipv6_allowed_for_dual_stack</a></code> | <code>bool \| cdktn.IResolvable</code> | Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | A list of VPC security group IDs. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | A list of VPC subnet IDs. |

---

##### `ipv6_allowed_for_dual_stack`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.ipv6AllowedForDualStack"></a>

```python
ipv6_allowed_for_dual_stack: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#ipv_6_allowed_for_dual_stack LambdaFunction#ipv_6_allowed_for_dual_stack}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

A list of VPC subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn">reset_capacity_provider_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu">reset_execution_environment_memory_gi_b_per_v_cpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency">reset_per_execution_environment_max_concurrency</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_capacity_provider_arn` <a name="reset_capacity_provider_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetCapacityProviderArn"></a>

```python
def reset_capacity_provider_arn() -> None
```

##### `reset_execution_environment_memory_gi_b_per_v_cpu` <a name="reset_execution_environment_memory_gi_b_per_v_cpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetExecutionEnvironmentMemoryGiBPerVCpu"></a>

```python
def reset_execution_environment_memory_gi_b_per_v_cpu() -> None
```

##### `reset_per_execution_environment_max_concurrency` <a name="reset_per_execution_environment_max_concurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.resetPerExecutionEnvironmentMaxConcurrency"></a>

```python
def reset_per_execution_environment_max_concurrency() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput">capacity_provider_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput">execution_environment_memory_gi_b_per_v_cpu_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput">per_execution_environment_max_concurrency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn">capacity_provider_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu">execution_environment_memory_gi_b_per_v_cpu</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency">per_execution_environment_max_concurrency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_provider_arn_input`<sup>Optional</sup> <a name="capacity_provider_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArnInput"></a>

```python
capacity_provider_arn_input: str
```

- *Type:* str

---

##### `execution_environment_memory_gi_b_per_v_cpu_input`<sup>Optional</sup> <a name="execution_environment_memory_gi_b_per_v_cpu_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpuInput"></a>

```python
execution_environment_memory_gi_b_per_v_cpu_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_execution_environment_max_concurrency_input`<sup>Optional</sup> <a name="per_execution_environment_max_concurrency_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrencyInput"></a>

```python
per_execution_environment_max_concurrency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_provider_arn`<sup>Required</sup> <a name="capacity_provider_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.capacityProviderArn"></a>

```python
capacity_provider_arn: str
```

- *Type:* str

---

##### `execution_environment_memory_gi_b_per_v_cpu`<sup>Required</sup> <a name="execution_environment_memory_gi_b_per_v_cpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.executionEnvironmentMemoryGiBPerVCpu"></a>

```python
execution_environment_memory_gi_b_per_v_cpu: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `per_execution_environment_max_concurrency`<sup>Required</sup> <a name="per_execution_environment_max_concurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.perExecutionEnvironmentMaxConcurrency"></a>

```python
per_execution_environment_max_concurrency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---


### LambdaFunctionCapacityProviderConfigOutputReference <a name="LambdaFunctionCapacityProviderConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig">put_lambda_managed_instances_capacity_provider_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig">reset_lambda_managed_instances_capacity_provider_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_lambda_managed_instances_capacity_provider_config` <a name="put_lambda_managed_instances_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig"></a>

```python
def put_lambda_managed_instances_capacity_provider_config(
  capacity_provider_arn: str = None,
  execution_environment_memory_gi_b_per_v_cpu: typing.Union[int, float] = None,
  per_execution_environment_max_concurrency: typing.Union[int, float] = None
) -> None
```

###### `capacity_provider_arn`<sup>Optional</sup> <a name="capacity_provider_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig.parameter.capacityProviderArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the capacity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#capacity_provider_arn LambdaFunction#capacity_provider_arn}

---

###### `execution_environment_memory_gi_b_per_v_cpu`<sup>Optional</sup> <a name="execution_environment_memory_gi_b_per_v_cpu" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig.parameter.executionEnvironmentMemoryGiBPerVCpu"></a>

- *Type:* typing.Union[int, float]

The amount of memory in GiB allocated per vCPU for execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#execution_environment_memory_gi_b_per_v_cpu LambdaFunction#execution_environment_memory_gi_b_per_v_cpu}

---

###### `per_execution_environment_max_concurrency`<sup>Optional</sup> <a name="per_execution_environment_max_concurrency" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.putLambdaManagedInstancesCapacityProviderConfig.parameter.perExecutionEnvironmentMaxConcurrency"></a>

- *Type:* typing.Union[int, float]

The maximum number of concurrent executions that can run on each execution environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lambda_function#per_execution_environment_max_concurrency LambdaFunction#per_execution_environment_max_concurrency}

---

##### `reset_lambda_managed_instances_capacity_provider_config` <a name="reset_lambda_managed_instances_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.resetLambdaManagedInstancesCapacityProviderConfig"></a>

```python
def reset_lambda_managed_instances_capacity_provider_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig">lambda_managed_instances_capacity_provider_config</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput">lambda_managed_instances_capacity_provider_config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lambda_managed_instances_capacity_provider_config`<sup>Required</sup> <a name="lambda_managed_instances_capacity_provider_config" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfig"></a>

```python
lambda_managed_instances_capacity_provider_config: LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfigOutputReference</a>

---

##### `lambda_managed_instances_capacity_provider_config_input`<sup>Optional</sup> <a name="lambda_managed_instances_capacity_provider_config_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.lambdaManagedInstancesCapacityProviderConfigInput"></a>

```python
lambda_managed_instances_capacity_provider_config_input: IResolvable | LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig">LambdaFunctionCapacityProviderConfigLambdaManagedInstancesCapacityProviderConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionCapacityProviderConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCapacityProviderConfig">LambdaFunctionCapacityProviderConfig</a>

---


### LambdaFunctionCodeOutputReference <a name="LambdaFunctionCodeOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionCodeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri">reset_image_uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket">reset_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key">reset_s3_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode">reset_s3_object_storage_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion">reset_s3_object_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn">reset_source_kms_key_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile">reset_zip_file</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_image_uri` <a name="reset_image_uri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetImageUri"></a>

```python
def reset_image_uri() -> None
```

##### `reset_s3_bucket` <a name="reset_s3_bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Bucket"></a>

```python
def reset_s3_bucket() -> None
```

##### `reset_s3_key` <a name="reset_s3_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3Key"></a>

```python
def reset_s3_key() -> None
```

##### `reset_s3_object_storage_mode` <a name="reset_s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectStorageMode"></a>

```python
def reset_s3_object_storage_mode() -> None
```

##### `reset_s3_object_version` <a name="reset_s3_object_version" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetS3ObjectVersion"></a>

```python
def reset_s3_object_version() -> None
```

##### `reset_source_kms_key_arn` <a name="reset_source_kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetSourceKmsKeyArn"></a>

```python
def reset_source_kms_key_arn() -> None
```

##### `reset_zip_file` <a name="reset_zip_file" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.resetZipFile"></a>

```python
def reset_zip_file() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput">image_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput">s3_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput">s3_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput">s3_object_storage_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput">s3_object_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput">source_kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput">zip_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri">image_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket">s3_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key">s3_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode">s3_object_storage_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion">s3_object_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn">source_kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile">zip_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_uri_input`<sup>Optional</sup> <a name="image_uri_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUriInput"></a>

```python
image_uri_input: str
```

- *Type:* str

---

##### `s3_bucket_input`<sup>Optional</sup> <a name="s3_bucket_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3BucketInput"></a>

```python
s3_bucket_input: str
```

- *Type:* str

---

##### `s3_key_input`<sup>Optional</sup> <a name="s3_key_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3KeyInput"></a>

```python
s3_key_input: str
```

- *Type:* str

---

##### `s3_object_storage_mode_input`<sup>Optional</sup> <a name="s3_object_storage_mode_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageModeInput"></a>

```python
s3_object_storage_mode_input: str
```

- *Type:* str

---

##### `s3_object_version_input`<sup>Optional</sup> <a name="s3_object_version_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersionInput"></a>

```python
s3_object_version_input: str
```

- *Type:* str

---

##### `source_kms_key_arn_input`<sup>Optional</sup> <a name="source_kms_key_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArnInput"></a>

```python
source_kms_key_arn_input: str
```

- *Type:* str

---

##### `zip_file_input`<sup>Optional</sup> <a name="zip_file_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFileInput"></a>

```python
zip_file_input: str
```

- *Type:* str

---

##### `image_uri`<sup>Required</sup> <a name="image_uri" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.imageUri"></a>

```python
image_uri: str
```

- *Type:* str

---

##### `s3_bucket`<sup>Required</sup> <a name="s3_bucket" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Bucket"></a>

```python
s3_bucket: str
```

- *Type:* str

---

##### `s3_key`<sup>Required</sup> <a name="s3_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3Key"></a>

```python
s3_key: str
```

- *Type:* str

---

##### `s3_object_storage_mode`<sup>Required</sup> <a name="s3_object_storage_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectStorageMode"></a>

```python
s3_object_storage_mode: str
```

- *Type:* str

---

##### `s3_object_version`<sup>Required</sup> <a name="s3_object_version" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.s3ObjectVersion"></a>

```python
s3_object_version: str
```

- *Type:* str

---

##### `source_kms_key_arn`<sup>Required</sup> <a name="source_kms_key_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.sourceKmsKeyArn"></a>

```python
source_kms_key_arn: str
```

- *Type:* str

---

##### `zip_file`<sup>Required</sup> <a name="zip_file" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.zipFile"></a>

```python
zip_file: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCodeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionCode
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionCode">LambdaFunctionCode</a>

---


### LambdaFunctionDeadLetterConfigOutputReference <a name="LambdaFunctionDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn">reset_target_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_target_arn` <a name="reset_target_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.resetTargetArn"></a>

```python
def reset_target_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput">target_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn">target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_arn_input`<sup>Optional</sup> <a name="target_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArnInput"></a>

```python
target_arn_input: str
```

- *Type:* str

---

##### `target_arn`<sup>Required</sup> <a name="target_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.targetArn"></a>

```python
target_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionDeadLetterConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDeadLetterConfig">LambdaFunctionDeadLetterConfig</a>

---


### LambdaFunctionDurableConfigOutputReference <a name="LambdaFunctionDurableConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionDurableConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout">reset_execution_timeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_execution_timeout` <a name="reset_execution_timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetExecutionTimeout"></a>

```python
def reset_execution_timeout() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput">execution_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout">execution_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `execution_timeout_input`<sup>Optional</sup> <a name="execution_timeout_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeoutInput"></a>

```python
execution_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `execution_timeout`<sup>Required</sup> <a name="execution_timeout" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.executionTimeout"></a>

```python
execution_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionDurableConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionDurableConfig">LambdaFunctionDurableConfig</a>

---


### LambdaFunctionEnvironmentOutputReference <a name="LambdaFunctionEnvironmentOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionEnvironmentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_variables` <a name="reset_variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.resetVariables"></a>

```python
def reset_variables() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput">variables_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables">variables</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variablesInput"></a>

```python
variables_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.variables"></a>

```python
variables: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironmentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionEnvironment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEnvironment">LambdaFunctionEnvironment</a>

---


### LambdaFunctionEphemeralStorageOutputReference <a name="LambdaFunctionEphemeralStorageOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionEphemeralStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize">reset_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_size` <a name="reset_size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.resetSize"></a>

```python
def reset_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorageOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionEphemeralStorage
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionEphemeralStorage">LambdaFunctionEphemeralStorage</a>

---


### LambdaFunctionFileSystemConfigsList <a name="LambdaFunctionFileSystemConfigsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionFileSystemConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaFunctionFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaFunctionFileSystemConfigs]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>]

---


### LambdaFunctionFileSystemConfigsOutputReference <a name="LambdaFunctionFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn">reset_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath">reset_local_mount_path</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_arn` <a name="reset_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetArn"></a>

```python
def reset_arn() -> None
```

##### `reset_local_mount_path` <a name="reset_local_mount_path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.resetLocalMountPath"></a>

```python
def reset_local_mount_path() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput">local_mount_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath">local_mount_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `local_mount_path_input`<sup>Optional</sup> <a name="local_mount_path_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPathInput"></a>

```python
local_mount_path_input: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `local_mount_path`<sup>Required</sup> <a name="local_mount_path" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.localMountPath"></a>

```python
local_mount_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionFileSystemConfigs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFileSystemConfigs">LambdaFunctionFileSystemConfigs</a>

---


### LambdaFunctionFunctionScalingConfigOutputReference <a name="LambdaFunctionFunctionScalingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments">reset_max_execution_environments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments">reset_min_execution_environments</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_execution_environments` <a name="reset_max_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMaxExecutionEnvironments"></a>

```python
def reset_max_execution_environments() -> None
```

##### `reset_min_execution_environments` <a name="reset_min_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.resetMinExecutionEnvironments"></a>

```python
def reset_min_execution_environments() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput">max_execution_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput">min_execution_environments_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments">max_execution_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments">min_execution_environments</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max_execution_environments_input`<sup>Optional</sup> <a name="max_execution_environments_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironmentsInput"></a>

```python
max_execution_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_execution_environments_input`<sup>Optional</sup> <a name="min_execution_environments_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironmentsInput"></a>

```python
min_execution_environments_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_environments`<sup>Required</sup> <a name="max_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.maxExecutionEnvironments"></a>

```python
max_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_execution_environments`<sup>Required</sup> <a name="min_execution_environments" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.minExecutionEnvironments"></a>

```python
min_execution_environments: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionFunctionScalingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionFunctionScalingConfig">LambdaFunctionFunctionScalingConfig</a>

---


### LambdaFunctionImageConfigOutputReference <a name="LambdaFunctionImageConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionImageConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand">reset_command</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint">reset_entry_point</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_command` <a name="reset_command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetCommand"></a>

```python
def reset_command() -> None
```

##### `reset_entry_point` <a name="reset_entry_point" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetEntryPoint"></a>

```python
def reset_entry_point() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput">command_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput">entry_point_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command">command</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint">entry_point</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_input`<sup>Optional</sup> <a name="command_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.commandInput"></a>

```python
command_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_point_input`<sup>Optional</sup> <a name="entry_point_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPointInput"></a>

```python
entry_point_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.command"></a>

```python
command: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entry_point`<sup>Required</sup> <a name="entry_point" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.entryPoint"></a>

```python
entry_point: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionImageConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionImageConfig">LambdaFunctionImageConfig</a>

---


### LambdaFunctionLoggingConfigOutputReference <a name="LambdaFunctionLoggingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionLoggingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel">reset_application_log_level</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat">reset_log_format</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel">reset_system_log_level</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_application_log_level` <a name="reset_application_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetApplicationLogLevel"></a>

```python
def reset_application_log_level() -> None
```

##### `reset_log_format` <a name="reset_log_format" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogFormat"></a>

```python
def reset_log_format() -> None
```

##### `reset_log_group` <a name="reset_log_group" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```

##### `reset_system_log_level` <a name="reset_system_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.resetSystemLogLevel"></a>

```python
def reset_system_log_level() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput">application_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput">log_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput">system_log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel">application_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat">log_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel">system_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_log_level_input`<sup>Optional</sup> <a name="application_log_level_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevelInput"></a>

```python
application_log_level_input: str
```

- *Type:* str

---

##### `log_format_input`<sup>Optional</sup> <a name="log_format_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormatInput"></a>

```python
log_format_input: str
```

- *Type:* str

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `system_log_level_input`<sup>Optional</sup> <a name="system_log_level_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevelInput"></a>

```python
system_log_level_input: str
```

- *Type:* str

---

##### `application_log_level`<sup>Required</sup> <a name="application_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.applicationLogLevel"></a>

```python
application_log_level: str
```

- *Type:* str

---

##### `log_format`<sup>Required</sup> <a name="log_format" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logFormat"></a>

```python
log_format: str
```

- *Type:* str

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `system_log_level`<sup>Required</sup> <a name="system_log_level" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.systemLogLevel"></a>

```python
system_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionLoggingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionLoggingConfig">LambdaFunctionLoggingConfig</a>

---


### LambdaFunctionRuntimeManagementConfigOutputReference <a name="LambdaFunctionRuntimeManagementConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn">reset_runtime_version_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn">reset_update_runtime_on</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_runtime_version_arn` <a name="reset_runtime_version_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetRuntimeVersionArn"></a>

```python
def reset_runtime_version_arn() -> None
```

##### `reset_update_runtime_on` <a name="reset_update_runtime_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.resetUpdateRuntimeOn"></a>

```python
def reset_update_runtime_on() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput">runtime_version_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput">update_runtime_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn">runtime_version_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn">update_runtime_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `runtime_version_arn_input`<sup>Optional</sup> <a name="runtime_version_arn_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArnInput"></a>

```python
runtime_version_arn_input: str
```

- *Type:* str

---

##### `update_runtime_on_input`<sup>Optional</sup> <a name="update_runtime_on_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOnInput"></a>

```python
update_runtime_on_input: str
```

- *Type:* str

---

##### `runtime_version_arn`<sup>Required</sup> <a name="runtime_version_arn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.runtimeVersionArn"></a>

```python
runtime_version_arn: str
```

- *Type:* str

---

##### `update_runtime_on`<sup>Required</sup> <a name="update_runtime_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.updateRuntimeOn"></a>

```python
update_runtime_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionRuntimeManagementConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionRuntimeManagementConfig">LambdaFunctionRuntimeManagementConfig</a>

---


### LambdaFunctionSnapStartOutputReference <a name="LambdaFunctionSnapStartOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionSnapStartOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn">reset_apply_on</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_apply_on` <a name="reset_apply_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.resetApplyOn"></a>

```python
def reset_apply_on() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput">apply_on_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn">apply_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_on_input`<sup>Optional</sup> <a name="apply_on_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOnInput"></a>

```python
apply_on_input: str
```

- *Type:* str

---

##### `apply_on`<sup>Required</sup> <a name="apply_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.applyOn"></a>

```python
apply_on: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionSnapStart
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStart">LambdaFunctionSnapStart</a>

---


### LambdaFunctionSnapStartResponseOutputReference <a name="LambdaFunctionSnapStartResponseOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionSnapStartResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn">apply_on</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus">optimization_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `apply_on`<sup>Required</sup> <a name="apply_on" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.applyOn"></a>

```python
apply_on: str
```

- *Type:* str

---

##### `optimization_status`<sup>Required</sup> <a name="optimization_status" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.optimizationStatus"></a>

```python
optimization_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponseOutputReference.property.internalValue"></a>

```python
internal_value: LambdaFunctionSnapStartResponse
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionSnapStartResponse">LambdaFunctionSnapStartResponse</a>

---


### LambdaFunctionTagsList <a name="LambdaFunctionTagsList" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LambdaFunctionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LambdaFunctionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>]

---


### LambdaFunctionTagsOutputReference <a name="LambdaFunctionTagsOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTags">LambdaFunctionTags</a>

---


### LambdaFunctionTenancyConfigOutputReference <a name="LambdaFunctionTenancyConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTenancyConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode">reset_tenant_isolation_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_tenant_isolation_mode` <a name="reset_tenant_isolation_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.resetTenantIsolationMode"></a>

```python
def reset_tenant_isolation_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput">tenant_isolation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode">tenant_isolation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tenant_isolation_mode_input`<sup>Optional</sup> <a name="tenant_isolation_mode_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationModeInput"></a>

```python
tenant_isolation_mode_input: str
```

- *Type:* str

---

##### `tenant_isolation_mode`<sup>Required</sup> <a name="tenant_isolation_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.tenantIsolationMode"></a>

```python
tenant_isolation_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionTenancyConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTenancyConfig">LambdaFunctionTenancyConfig</a>

---


### LambdaFunctionTracingConfigOutputReference <a name="LambdaFunctionTracingConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionTracingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode">reset_mode</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_mode` <a name="reset_mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.resetMode"></a>

```python
def reset_mode() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionTracingConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionTracingConfig">LambdaFunctionTracingConfig</a>

---


### LambdaFunctionVpcConfigOutputReference <a name="LambdaFunctionVpcConfigOutputReference" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lambda_function

lambdaFunction.LambdaFunctionVpcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack">reset_ipv6_allowed_for_dual_stack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ipv6_allowed_for_dual_stack` <a name="reset_ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetIpv6AllowedForDualStack"></a>

```python
def reset_ipv6_allowed_for_dual_stack() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput">ipv6_allowed_for_dual_stack_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack">ipv6_allowed_for_dual_stack</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_allowed_for_dual_stack_input`<sup>Optional</sup> <a name="ipv6_allowed_for_dual_stack_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStackInput"></a>

```python
ipv6_allowed_for_dual_stack_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ipv6_allowed_for_dual_stack`<sup>Required</sup> <a name="ipv6_allowed_for_dual_stack" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.ipv6AllowedForDualStack"></a>

```python
ipv6_allowed_for_dual_stack: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LambdaFunctionVpcConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lambdaFunction.LambdaFunctionVpcConfig">LambdaFunctionVpcConfig</a>

---



