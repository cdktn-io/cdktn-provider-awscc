# `cloudformationStackSet` Submodule <a name="`cloudformationStackSet` Submodule" id="@cdktn/provider-awscc.cloudformationStackSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSet <a name="CloudformationStackSet" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set awscc_cloudformation_stack_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permission_model: str,
  stack_set_name: str,
  administration_role_arn: str = None,
  auto_deployment: CloudformationStackSetAutoDeployment = None,
  call_as: str = None,
  capabilities: typing.List[str] = None,
  description: str = None,
  execution_role_name: str = None,
  managed_execution: CloudformationStackSetManagedExecution = None,
  operation_preferences: CloudformationStackSetOperationPreferences = None,
  parameters: IResolvable | typing.List[CloudformationStackSetParameters] = None,
  stack_instances_group: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup] = None,
  tags: IResolvable | typing.List[CloudformationStackSetTags] = None,
  template_body: str = None,
  template_url: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel">permission_model</a></code> | <code>str</code> | Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackSetName">stack_set_name</a></code> | <code>str</code> | The name to associate with the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs">call_as</a></code> | <code>str</code> | Specifies the AWS account that you are acting from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName">execution_role_name</a></code> | <code>str</code> | The name of the IAM execution role to use to create the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution">managed_execution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | The user-specified preferences for how AWS CloudFormation performs a stack set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]</code> | The input parameters for the stack set template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackInstancesGroup">stack_instances_group</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]</code> | A group of stack instances with parameters in some specific accounts and regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]</code> | The key-value pairs to associate with this stack set and the stacks created from it. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl">template_url</a></code> | <code>str</code> | Location of file containing the template body. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.permissionModel"></a>

- *Type:* str

Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackSetName"></a>

- *Type:* str

The name to associate with the stack set.

The name must be unique in the Region where you create your stack set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_set_name CloudformationStackSet#stack_set_name}

---

##### `administration_role_arn`<sup>Optional</sup> <a name="administration_role_arn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.administrationRoleArn"></a>

- *Type:* str

The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.

Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}

---

##### `auto_deployment`<sup>Optional</sup> <a name="auto_deployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.autoDeployment"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU).

Specify only if PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `call_as`<sup>Optional</sup> <a name="call_as" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.callAs"></a>

- *Type:* str

Specifies the AWS account that you are acting from.

By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.capabilities"></a>

- *Type:* typing.List[str]

In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.description"></a>

- *Type:* str

A description of the stack set.

You can use the description to identify the stack set's purpose or other important information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}

---

##### `execution_role_name`<sup>Optional</sup> <a name="execution_role_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.executionRoleName"></a>

- *Type:* str

The name of the IAM execution role to use to create the stack set.

If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}

---

##### `managed_execution`<sup>Optional</sup> <a name="managed_execution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.managedExecution"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operation_preferences`<sup>Optional</sup> <a name="operation_preferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.operationPreferences"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

The user-specified preferences for how AWS CloudFormation performs a stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.parameters"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]

The input parameters for the stack set template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}

---

##### `stack_instances_group`<sup>Optional</sup> <a name="stack_instances_group" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.stackInstancesGroup"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]

A group of stack instances with parameters in some specific accounts and regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_instances_group CloudformationStackSet#stack_instances_group}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]

The key-value pairs to associate with this stack set and the stacks created from it.

AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateBody"></a>

- *Type:* str

The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.Initializer.parameter.templateUrl"></a>

- *Type:* str

Location of file containing the template body.

The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment">put_auto_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution">put_managed_execution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences">put_operation_preferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters">put_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup">put_stack_instances_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn">reset_administration_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment">reset_auto_deployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCallAs">reset_call_as</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCapabilities">reset_capabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName">reset_execution_role_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetManagedExecution">reset_managed_execution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences">reset_operation_preferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetParameters">reset_parameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetStackInstancesGroup">reset_stack_instances_group</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateBody">reset_template_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl">reset_template_url</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_deployment` <a name="put_auto_deployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment"></a>

```python
def put_auto_deployment(
  depends_on: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  retain_stacks_on_account_removal: bool | IResolvable = None
) -> None
```

###### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.dependsOn"></a>

- *Type:* typing.List[str]

A list of StackSet ARNs that this StackSet depends on for auto-deployment operations.

When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#depends_on CloudformationStackSet#depends_on}

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions.

If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}

---

###### `retain_stacks_on_account_removal`<sup>Optional</sup> <a name="retain_stacks_on_account_removal" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putAutoDeployment.parameter.retainStacksOnAccountRemoval"></a>

- *Type:* bool | cdktn.IResolvable

If set to true, stack resources are retained when an account is removed from a target organization or OU.

If set to false, stack resources are deleted. Specify only if Enabled is set to True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}

---

##### `put_managed_execution` <a name="put_managed_execution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution"></a>

```python
def put_managed_execution(
  active: bool | IResolvable = None
) -> None
```

###### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putManagedExecution.parameter.active"></a>

- *Type:* bool | cdktn.IResolvable

When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations.

After conflicting operations finish, StackSets starts queued operations in request order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}

---

##### `put_operation_preferences` <a name="put_operation_preferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences"></a>

```python
def put_operation_preferences(
  concurrency_mode: str = None,
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrent_count: typing.Union[int, float] = None,
  max_concurrent_percentage: typing.Union[int, float] = None,
  region_concurrency_type: str = None,
  region_order: typing.List[str] = None
) -> None
```

###### `concurrency_mode`<sup>Optional</sup> <a name="concurrency_mode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.concurrencyMode"></a>

- *Type:* str

Specifies how the concurrency level behaves during the operation execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#concurrency_mode CloudformationStackSet#concurrency_mode}

---

###### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.failureToleranceCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

###### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.failureTolerancePercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

###### `max_concurrent_count`<sup>Optional</sup> <a name="max_concurrent_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.maxConcurrentCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

###### `max_concurrent_percentage`<sup>Optional</sup> <a name="max_concurrent_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.maxConcurrentPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

###### `region_concurrency_type`<sup>Optional</sup> <a name="region_concurrency_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.regionConcurrencyType"></a>

- *Type:* str

The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}

---

###### `region_order`<sup>Optional</sup> <a name="region_order" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putOperationPreferences.parameter.regionOrder"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

##### `put_parameters` <a name="put_parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters"></a>

```python
def put_parameters(
  value: IResolvable | typing.List[CloudformationStackSetParameters]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putParameters.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]

---

##### `put_stack_instances_group` <a name="put_stack_instances_group" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup"></a>

```python
def put_stack_instances_group(
  value: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putStackInstancesGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[CloudformationStackSetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]

---

##### `reset_administration_role_arn` <a name="reset_administration_role_arn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAdministrationRoleArn"></a>

```python
def reset_administration_role_arn() -> None
```

##### `reset_auto_deployment` <a name="reset_auto_deployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetAutoDeployment"></a>

```python
def reset_auto_deployment() -> None
```

##### `reset_call_as` <a name="reset_call_as" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCallAs"></a>

```python
def reset_call_as() -> None
```

##### `reset_capabilities` <a name="reset_capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetCapabilities"></a>

```python
def reset_capabilities() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_role_name` <a name="reset_execution_role_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetExecutionRoleName"></a>

```python
def reset_execution_role_name() -> None
```

##### `reset_managed_execution` <a name="reset_managed_execution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetManagedExecution"></a>

```python
def reset_managed_execution() -> None
```

##### `reset_operation_preferences` <a name="reset_operation_preferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetOperationPreferences"></a>

```python
def reset_operation_preferences() -> None
```

##### `reset_parameters` <a name="reset_parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetParameters"></a>

```python
def reset_parameters() -> None
```

##### `reset_stack_instances_group` <a name="reset_stack_instances_group" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetStackInstancesGroup"></a>

```python
def reset_stack_instances_group() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

##### `reset_template_url` <a name="reset_template_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.resetTemplateUrl"></a>

```python
def reset_template_url() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CloudformationStackSet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CloudformationStackSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudformationStackSet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudformationStackSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudformationStackSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecution">managed_execution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList">CloudformationStackSetParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroup">stack_instances_group</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList">CloudformationStackSetStackInstancesGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetId">stack_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList">CloudformationStackSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput">administration_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput">auto_deployment_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAsInput">call_as_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput">capabilities_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput">execution_role_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput">managed_execution_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput">operation_preferences_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parametersInput">parameters_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput">permission_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroupInput">stack_instances_group_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetNameInput">stack_set_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput">template_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAs">call_as</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleName">execution_role_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModel">permission_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetName">stack_set_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrl">template_url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `auto_deployment`<sup>Required</sup> <a name="auto_deployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeployment"></a>

```python
auto_deployment: CloudformationStackSetAutoDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference">CloudformationStackSetAutoDeploymentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_execution`<sup>Required</sup> <a name="managed_execution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecution"></a>

```python
managed_execution: CloudformationStackSetManagedExecutionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference">CloudformationStackSetManagedExecutionOutputReference</a>

---

##### `operation_preferences`<sup>Required</sup> <a name="operation_preferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferences"></a>

```python
operation_preferences: CloudformationStackSetOperationPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference">CloudformationStackSetOperationPreferencesOutputReference</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parameters"></a>

```python
parameters: CloudformationStackSetParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList">CloudformationStackSetParametersList</a>

---

##### `stack_instances_group`<sup>Required</sup> <a name="stack_instances_group" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroup"></a>

```python
stack_instances_group: CloudformationStackSetStackInstancesGroupList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList">CloudformationStackSetStackInstancesGroupList</a>

---

##### `stack_set_id`<sup>Required</sup> <a name="stack_set_id" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetId"></a>

```python
stack_set_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tags"></a>

```python
tags: CloudformationStackSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList">CloudformationStackSetTagsList</a>

---

##### `administration_role_arn_input`<sup>Optional</sup> <a name="administration_role_arn_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArnInput"></a>

```python
administration_role_arn_input: str
```

- *Type:* str

---

##### `auto_deployment_input`<sup>Optional</sup> <a name="auto_deployment_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.autoDeploymentInput"></a>

```python
auto_deployment_input: IResolvable | CloudformationStackSetAutoDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---

##### `call_as_input`<sup>Optional</sup> <a name="call_as_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAsInput"></a>

```python
call_as_input: str
```

- *Type:* str

---

##### `capabilities_input`<sup>Optional</sup> <a name="capabilities_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilitiesInput"></a>

```python
capabilities_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_role_name_input`<sup>Optional</sup> <a name="execution_role_name_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleNameInput"></a>

```python
execution_role_name_input: str
```

- *Type:* str

---

##### `managed_execution_input`<sup>Optional</sup> <a name="managed_execution_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.managedExecutionInput"></a>

```python
managed_execution_input: IResolvable | CloudformationStackSetManagedExecution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---

##### `operation_preferences_input`<sup>Optional</sup> <a name="operation_preferences_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.operationPreferencesInput"></a>

```python
operation_preferences_input: IResolvable | CloudformationStackSetOperationPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---

##### `parameters_input`<sup>Optional</sup> <a name="parameters_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.parametersInput"></a>

```python
parameters_input: IResolvable | typing.List[CloudformationStackSetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]

---

##### `permission_model_input`<sup>Optional</sup> <a name="permission_model_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModelInput"></a>

```python
permission_model_input: str
```

- *Type:* str

---

##### `stack_instances_group_input`<sup>Optional</sup> <a name="stack_instances_group_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackInstancesGroupInput"></a>

```python
stack_instances_group_input: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]

---

##### `stack_set_name_input`<sup>Optional</sup> <a name="stack_set_name_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetNameInput"></a>

```python
stack_set_name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[CloudformationStackSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `template_url_input`<sup>Optional</sup> <a name="template_url_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrlInput"></a>

```python
template_url_input: str
```

- *Type:* str

---

##### `administration_role_arn`<sup>Required</sup> <a name="administration_role_arn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.administrationRoleArn"></a>

```python
administration_role_arn: str
```

- *Type:* str

---

##### `call_as`<sup>Required</sup> <a name="call_as" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.callAs"></a>

```python
call_as: str
```

- *Type:* str

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_role_name`<sup>Required</sup> <a name="execution_role_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.executionRoleName"></a>

```python
execution_role_name: str
```

- *Type:* str

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.permissionModel"></a>

```python
permission_model: str
```

- *Type:* str

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

##### `template_url`<sup>Required</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetAutoDeployment <a name="CloudformationStackSetAutoDeployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetAutoDeployment(
  depends_on: typing.List[str] = None,
  enabled: bool | IResolvable = None,
  retain_stacks_on_account_removal: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | A list of StackSet ARNs that this StackSet depends on for auto-deployment operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval">retain_stacks_on_account_removal</a></code> | <code>bool \| cdktn.IResolvable</code> | If set to true, stack resources are retained when an account is removed from a target organization or OU. |

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

A list of StackSet ARNs that this StackSet depends on for auto-deployment operations.

When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#depends_on CloudformationStackSet#depends_on}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions.

If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#enabled CloudformationStackSet#enabled}

---

##### `retain_stacks_on_account_removal`<sup>Optional</sup> <a name="retain_stacks_on_account_removal" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment.property.retainStacksOnAccountRemoval"></a>

```python
retain_stacks_on_account_removal: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If set to true, stack resources are retained when an account is removed from a target organization or OU.

If set to false, stack resources are deleted. Specify only if Enabled is set to True.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#retain_stacks_on_account_removal CloudformationStackSet#retain_stacks_on_account_removal}

---

### CloudformationStackSetConfig <a name="CloudformationStackSetConfig" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  permission_model: str,
  stack_set_name: str,
  administration_role_arn: str = None,
  auto_deployment: CloudformationStackSetAutoDeployment = None,
  call_as: str = None,
  capabilities: typing.List[str] = None,
  description: str = None,
  execution_role_name: str = None,
  managed_execution: CloudformationStackSetManagedExecution = None,
  operation_preferences: CloudformationStackSetOperationPreferences = None,
  parameters: IResolvable | typing.List[CloudformationStackSetParameters] = None,
  stack_instances_group: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup] = None,
  tags: IResolvable | typing.List[CloudformationStackSetTags] = None,
  template_body: str = None,
  template_url: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel">permission_model</a></code> | <code>str</code> | Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackSetName">stack_set_name</a></code> | <code>str</code> | The name to associate with the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn">administration_role_arn</a></code> | <code>str</code> | The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment">auto_deployment</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.callAs">call_as</a></code> | <code>str</code> | Specifies the AWS account that you are acting from. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities">capabilities</a></code> | <code>typing.List[str]</code> | In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.description">description</a></code> | <code>str</code> | A description of the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName">execution_role_name</a></code> | <code>str</code> | The name of the IAM execution role to use to create the stack set. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution">managed_execution</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences">operation_preferences</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | The user-specified preferences for how AWS CloudFormation performs a stack set operation. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.parameters">parameters</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]</code> | The input parameters for the stack set template. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackInstancesGroup">stack_instances_group</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]</code> | A group of stack instances with parameters in some specific accounts and regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]</code> | The key-value pairs to associate with this stack set and the stacks created from it. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody">template_body</a></code> | <code>str</code> | The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl">template_url</a></code> | <code>str</code> | Location of file containing the template body. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `permission_model`<sup>Required</sup> <a name="permission_model" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.permissionModel"></a>

```python
permission_model: str
```

- *Type:* str

Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#permission_model CloudformationStackSet#permission_model}

---

##### `stack_set_name`<sup>Required</sup> <a name="stack_set_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackSetName"></a>

```python
stack_set_name: str
```

- *Type:* str

The name to associate with the stack set.

The name must be unique in the Region where you create your stack set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_set_name CloudformationStackSet#stack_set_name}

---

##### `administration_role_arn`<sup>Optional</sup> <a name="administration_role_arn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.administrationRoleArn"></a>

```python
administration_role_arn: str
```

- *Type:* str

The Amazon Resource Number (ARN) of the IAM role to use to create this stack set.

Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#administration_role_arn CloudformationStackSet#administration_role_arn}

---

##### `auto_deployment`<sup>Optional</sup> <a name="auto_deployment" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.autoDeployment"></a>

```python
auto_deployment: CloudformationStackSetAutoDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU).

Specify only if PermissionModel is SERVICE_MANAGED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#auto_deployment CloudformationStackSet#auto_deployment}

---

##### `call_as`<sup>Optional</sup> <a name="call_as" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.callAs"></a>

```python
call_as: str
```

- *Type:* str

Specifies the AWS account that you are acting from.

By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#call_as CloudformationStackSet#call_as}

---

##### `capabilities`<sup>Optional</sup> <a name="capabilities" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.capabilities"></a>

```python
capabilities: typing.List[str]
```

- *Type:* typing.List[str]

In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#capabilities CloudformationStackSet#capabilities}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the stack set.

You can use the description to identify the stack set's purpose or other important information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#description CloudformationStackSet#description}

---

##### `execution_role_name`<sup>Optional</sup> <a name="execution_role_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.executionRoleName"></a>

```python
execution_role_name: str
```

- *Type:* str

The name of the IAM execution role to use to create the stack set.

If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#execution_role_name CloudformationStackSet#execution_role_name}

---

##### `managed_execution`<sup>Optional</sup> <a name="managed_execution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.managedExecution"></a>

```python
managed_execution: CloudformationStackSetManagedExecution
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#managed_execution CloudformationStackSet#managed_execution}

---

##### `operation_preferences`<sup>Optional</sup> <a name="operation_preferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.operationPreferences"></a>

```python
operation_preferences: CloudformationStackSetOperationPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

The user-specified preferences for how AWS CloudFormation performs a stack set operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#operation_preferences CloudformationStackSet#operation_preferences}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.parameters"></a>

```python
parameters: IResolvable | typing.List[CloudformationStackSetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]

The input parameters for the stack set template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameters CloudformationStackSet#parameters}

---

##### `stack_instances_group`<sup>Optional</sup> <a name="stack_instances_group" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.stackInstancesGroup"></a>

```python
stack_instances_group: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]

A group of stack instances with parameters in some specific accounts and regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#stack_instances_group CloudformationStackSet#stack_instances_group}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[CloudformationStackSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]

The key-value pairs to associate with this stack set and the stacks created from it.

AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#tags CloudformationStackSet#tags}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_body CloudformationStackSet#template_body}

---

##### `template_url`<sup>Optional</sup> <a name="template_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetConfig.property.templateUrl"></a>

```python
template_url: str
```

- *Type:* str

Location of file containing the template body.

The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#template_url CloudformationStackSet#template_url}

---

### CloudformationStackSetManagedExecution <a name="CloudformationStackSetManagedExecution" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetManagedExecution(
  active: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. |

---

##### `active`<sup>Optional</sup> <a name="active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

When true, StackSets performs non-conflicting operations concurrently and queues conflicting operations.

After conflicting operations finish, StackSets starts queued operations in request order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#active CloudformationStackSet#active}

---

### CloudformationStackSetOperationPreferences <a name="CloudformationStackSetOperationPreferences" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetOperationPreferences(
  concurrency_mode: str = None,
  failure_tolerance_count: typing.Union[int, float] = None,
  failure_tolerance_percentage: typing.Union[int, float] = None,
  max_concurrent_count: typing.Union[int, float] = None,
  max_concurrent_percentage: typing.Union[int, float] = None,
  region_concurrency_type: str = None,
  region_order: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | Specifies how the concurrency level behaves during the operation execution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount">max_concurrent_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage">max_concurrent_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType">region_concurrency_type</a></code> | <code>str</code> | The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder">region_order</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}. |

---

##### `concurrency_mode`<sup>Optional</sup> <a name="concurrency_mode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.concurrencyMode"></a>

```python
concurrency_mode: str
```

- *Type:* str

Specifies how the concurrency level behaves during the operation execution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#concurrency_mode CloudformationStackSet#concurrency_mode}

---

##### `failure_tolerance_count`<sup>Optional</sup> <a name="failure_tolerance_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_count CloudformationStackSet#failure_tolerance_count}.

---

##### `failure_tolerance_percentage`<sup>Optional</sup> <a name="failure_tolerance_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#failure_tolerance_percentage CloudformationStackSet#failure_tolerance_percentage}.

---

##### `max_concurrent_count`<sup>Optional</sup> <a name="max_concurrent_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentCount"></a>

```python
max_concurrent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_count CloudformationStackSet#max_concurrent_count}.

---

##### `max_concurrent_percentage`<sup>Optional</sup> <a name="max_concurrent_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.maxConcurrentPercentage"></a>

```python
max_concurrent_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#max_concurrent_percentage CloudformationStackSet#max_concurrent_percentage}.

---

##### `region_concurrency_type`<sup>Optional</sup> <a name="region_concurrency_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionConcurrencyType"></a>

```python
region_concurrency_type: str
```

- *Type:* str

The concurrency type of deploying StackSets operations in regions, could be in parallel or one region at a time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_concurrency_type CloudformationStackSet#region_concurrency_type}

---

##### `region_order`<sup>Optional</sup> <a name="region_order" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences.property.regionOrder"></a>

```python
region_order: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#region_order CloudformationStackSet#region_order}.

---

### CloudformationStackSetParameters <a name="CloudformationStackSetParameters" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetParameters(
  parameter_key: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterKey">parameter_key</a></code> | <code>str</code> | The key associated with the parameter. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterValue">parameter_value</a></code> | <code>str</code> | The input value associated with the parameter. |

---

##### `parameter_key`<sup>Optional</sup> <a name="parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

The key associated with the parameter.

If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_key CloudformationStackSet#parameter_key}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The input value associated with the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_value CloudformationStackSet#parameter_value}

---

### CloudformationStackSetStackInstancesGroup <a name="CloudformationStackSetStackInstancesGroup" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroup(
  deployment_targets: CloudformationStackSetStackInstancesGroupDeploymentTargets = None,
  parameter_overrides: IResolvable | typing.List[CloudformationStackSetStackInstancesGroupParameterOverrides] = None,
  regions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.deploymentTargets">deployment_targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.parameterOverrides">parameter_overrides</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]</code> | A list of stack set parameters whose values you want to override in the selected stack instances. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.regions">regions</a></code> | <code>typing.List[str]</code> | The names of one or more Regions where you want to create stack instances using the specified AWS account(s). |

---

##### `deployment_targets`<sup>Optional</sup> <a name="deployment_targets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.deploymentTargets"></a>

```python
deployment_targets: CloudformationStackSetStackInstancesGroupDeploymentTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#deployment_targets CloudformationStackSet#deployment_targets}

---

##### `parameter_overrides`<sup>Optional</sup> <a name="parameter_overrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.parameterOverrides"></a>

```python
parameter_overrides: IResolvable | typing.List[CloudformationStackSetStackInstancesGroupParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]

A list of stack set parameters whose values you want to override in the selected stack instances.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_overrides CloudformationStackSet#parameter_overrides}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

The names of one or more Regions where you want to create stack instances using the specified AWS account(s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#regions CloudformationStackSet#regions}

---

### CloudformationStackSetStackInstancesGroupDeploymentTargets <a name="CloudformationStackSetStackInstancesGroupDeploymentTargets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets(
  account_filter_type: str = None,
  accounts: typing.List[str] = None,
  accounts_url: str = None,
  organizational_unit_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountFilterType">account_filter_type</a></code> | <code>str</code> | The filter type you want to apply on organizational units and accounts. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | AWS accounts that you want to create stack instances in the specified Region(s) for. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountsUrl">accounts_url</a></code> | <code>str</code> | Returns the value of the AccountsUrl property. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | The organization root ID or organizational unit (OU) IDs to which StackSets deploys. |

---

##### `account_filter_type`<sup>Optional</sup> <a name="account_filter_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountFilterType"></a>

```python
account_filter_type: str
```

- *Type:* str

The filter type you want to apply on organizational units and accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#account_filter_type CloudformationStackSet#account_filter_type}

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

AWS accounts that you want to create stack instances in the specified Region(s) for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts CloudformationStackSet#accounts}

---

##### `accounts_url`<sup>Optional</sup> <a name="accounts_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.accountsUrl"></a>

```python
accounts_url: str
```

- *Type:* str

Returns the value of the AccountsUrl property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts_url CloudformationStackSet#accounts_url}

---

##### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

The organization root ID or organizational unit (OU) IDs to which StackSets deploys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#organizational_unit_ids CloudformationStackSet#organizational_unit_ids}

---

### CloudformationStackSetStackInstancesGroupParameterOverrides <a name="CloudformationStackSetStackInstancesGroupParameterOverrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides(
  parameter_key: str = None,
  parameter_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterKey">parameter_key</a></code> | <code>str</code> | The key associated with the parameter. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterValue">parameter_value</a></code> | <code>str</code> | The input value associated with the parameter. |

---

##### `parameter_key`<sup>Optional</sup> <a name="parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

The key associated with the parameter.

If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_key CloudformationStackSet#parameter_key}

---

##### `parameter_value`<sup>Optional</sup> <a name="parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

The input value associated with the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#parameter_value CloudformationStackSet#parameter_value}

---

### CloudformationStackSetTags <a name="CloudformationStackSetTags" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.key">key</a></code> | <code>str</code> | A string used to identify this tag. You can specify a maximum of 127 characters for a tag key. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.value">value</a></code> | <code>str</code> | A string containing the value for this tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.key"></a>

```python
key: str
```

- *Type:* str

A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#key CloudformationStackSet#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags.property.value"></a>

```python
value: str
```

- *Type:* str

A string containing the value for this tag.

You can specify a maximum of 256 characters for a tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#value CloudformationStackSet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetAutoDeploymentOutputReference <a name="CloudformationStackSetAutoDeploymentOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetDependsOn">reset_depends_on</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval">reset_retain_stacks_on_account_removal</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_depends_on` <a name="reset_depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetDependsOn"></a>

```python
def reset_depends_on() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_retain_stacks_on_account_removal` <a name="reset_retain_stacks_on_account_removal" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.resetRetainStacksOnAccountRemoval"></a>

```python
def reset_retain_stacks_on_account_removal() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOnInput">depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput">retain_stacks_on_account_removal_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval">retain_stacks_on_account_removal</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `depends_on_input`<sup>Optional</sup> <a name="depends_on_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOnInput"></a>

```python
depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retain_stacks_on_account_removal_input`<sup>Optional</sup> <a name="retain_stacks_on_account_removal_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemovalInput"></a>

```python
retain_stacks_on_account_removal_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `depends_on`<sup>Required</sup> <a name="depends_on" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `retain_stacks_on_account_removal`<sup>Required</sup> <a name="retain_stacks_on_account_removal" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.retainStacksOnAccountRemoval"></a>

```python
retain_stacks_on_account_removal: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeploymentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetAutoDeployment
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetAutoDeployment">CloudformationStackSetAutoDeployment</a>

---


### CloudformationStackSetManagedExecutionOutputReference <a name="CloudformationStackSetManagedExecutionOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive">reset_active</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_active` <a name="reset_active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.resetActive"></a>

```python
def reset_active() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput">active_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active">active</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `active_input`<sup>Optional</sup> <a name="active_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.activeInput"></a>

```python
active_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `active`<sup>Required</sup> <a name="active" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.active"></a>

```python
active: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecutionOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetManagedExecution
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetManagedExecution">CloudformationStackSetManagedExecution</a>

---


### CloudformationStackSetOperationPreferencesOutputReference <a name="CloudformationStackSetOperationPreferencesOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetConcurrencyMode">reset_concurrency_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount">reset_failure_tolerance_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage">reset_failure_tolerance_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount">reset_max_concurrent_count</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage">reset_max_concurrent_percentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType">reset_region_concurrency_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder">reset_region_order</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_concurrency_mode` <a name="reset_concurrency_mode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetConcurrencyMode"></a>

```python
def reset_concurrency_mode() -> None
```

##### `reset_failure_tolerance_count` <a name="reset_failure_tolerance_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureToleranceCount"></a>

```python
def reset_failure_tolerance_count() -> None
```

##### `reset_failure_tolerance_percentage` <a name="reset_failure_tolerance_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetFailureTolerancePercentage"></a>

```python
def reset_failure_tolerance_percentage() -> None
```

##### `reset_max_concurrent_count` <a name="reset_max_concurrent_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentCount"></a>

```python
def reset_max_concurrent_count() -> None
```

##### `reset_max_concurrent_percentage` <a name="reset_max_concurrent_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetMaxConcurrentPercentage"></a>

```python
def reset_max_concurrent_percentage() -> None
```

##### `reset_region_concurrency_type` <a name="reset_region_concurrency_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionConcurrencyType"></a>

```python
def reset_region_concurrency_type() -> None
```

##### `reset_region_order` <a name="reset_region_order" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.resetRegionOrder"></a>

```python
def reset_region_order() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyModeInput">concurrency_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput">failure_tolerance_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput">failure_tolerance_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput">max_concurrent_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput">max_concurrent_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput">region_concurrency_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput">region_order_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode">concurrency_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount">failure_tolerance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage">failure_tolerance_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount">max_concurrent_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage">max_concurrent_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType">region_concurrency_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder">region_order</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `concurrency_mode_input`<sup>Optional</sup> <a name="concurrency_mode_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyModeInput"></a>

```python
concurrency_mode_input: str
```

- *Type:* str

---

##### `failure_tolerance_count_input`<sup>Optional</sup> <a name="failure_tolerance_count_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCountInput"></a>

```python
failure_tolerance_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage_input`<sup>Optional</sup> <a name="failure_tolerance_percentage_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentageInput"></a>

```python
failure_tolerance_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_count_input`<sup>Optional</sup> <a name="max_concurrent_count_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCountInput"></a>

```python
max_concurrent_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_percentage_input`<sup>Optional</sup> <a name="max_concurrent_percentage_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentageInput"></a>

```python
max_concurrent_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_concurrency_type_input`<sup>Optional</sup> <a name="region_concurrency_type_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyTypeInput"></a>

```python
region_concurrency_type_input: str
```

- *Type:* str

---

##### `region_order_input`<sup>Optional</sup> <a name="region_order_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrderInput"></a>

```python
region_order_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `concurrency_mode`<sup>Required</sup> <a name="concurrency_mode" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.concurrencyMode"></a>

```python
concurrency_mode: str
```

- *Type:* str

---

##### `failure_tolerance_count`<sup>Required</sup> <a name="failure_tolerance_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureToleranceCount"></a>

```python
failure_tolerance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_tolerance_percentage`<sup>Required</sup> <a name="failure_tolerance_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.failureTolerancePercentage"></a>

```python
failure_tolerance_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_count`<sup>Required</sup> <a name="max_concurrent_count" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentCount"></a>

```python
max_concurrent_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_concurrent_percentage`<sup>Required</sup> <a name="max_concurrent_percentage" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.maxConcurrentPercentage"></a>

```python
max_concurrent_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_concurrency_type`<sup>Required</sup> <a name="region_concurrency_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionConcurrencyType"></a>

```python
region_concurrency_type: str
```

- *Type:* str

---

##### `region_order`<sup>Required</sup> <a name="region_order" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.regionOrder"></a>

```python
region_order: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferencesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetOperationPreferences
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetOperationPreferences">CloudformationStackSetOperationPreferences</a>

---


### CloudformationStackSetParametersList <a name="CloudformationStackSetParametersList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetParametersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackSetParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationStackSetParameters]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>]

---


### CloudformationStackSetParametersOutputReference <a name="CloudformationStackSetParametersOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetParametersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterKey">reset_parameter_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_key` <a name="reset_parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterKey"></a>

```python
def reset_parameter_key() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKeyInput">parameter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key_input`<sup>Optional</sup> <a name="parameter_key_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKeyInput"></a>

```python
parameter_key_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParametersOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetParameters
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetParameters">CloudformationStackSetParameters</a>

---


### CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference <a name="CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountFilterType">reset_account_filter_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccounts">reset_accounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountsUrl">reset_accounts_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetOrganizationalUnitIds">reset_organizational_unit_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_account_filter_type` <a name="reset_account_filter_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountFilterType"></a>

```python
def reset_account_filter_type() -> None
```

##### `reset_accounts` <a name="reset_accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccounts"></a>

```python
def reset_accounts() -> None
```

##### `reset_accounts_url` <a name="reset_accounts_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetAccountsUrl"></a>

```python
def reset_accounts_url() -> None
```

##### `reset_organizational_unit_ids` <a name="reset_organizational_unit_ids" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```python
def reset_organizational_unit_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterTypeInput">account_filter_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsInput">accounts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrlInput">accounts_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">organizational_unit_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType">account_filter_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts">accounts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl">accounts_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds">organizational_unit_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_filter_type_input`<sup>Optional</sup> <a name="account_filter_type_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterTypeInput"></a>

```python
account_filter_type_input: str
```

- *Type:* str

---

##### `accounts_input`<sup>Optional</sup> <a name="accounts_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsInput"></a>

```python
accounts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts_url_input`<sup>Optional</sup> <a name="accounts_url_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrlInput"></a>

```python
accounts_url_input: str
```

- *Type:* str

---

##### `organizational_unit_ids_input`<sup>Optional</sup> <a name="organizational_unit_ids_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```python
organizational_unit_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `account_filter_type`<sup>Required</sup> <a name="account_filter_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountFilterType"></a>

```python
account_filter_type: str
```

- *Type:* str

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accounts"></a>

```python
accounts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accounts_url`<sup>Required</sup> <a name="accounts_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.accountsUrl"></a>

```python
accounts_url: str
```

- *Type:* str

---

##### `organizational_unit_ids`<sup>Required</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```python
organizational_unit_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetStackInstancesGroupDeploymentTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---


### CloudformationStackSetStackInstancesGroupList <a name="CloudformationStackSetStackInstancesGroupList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackSetStackInstancesGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationStackSetStackInstancesGroup]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>]

---


### CloudformationStackSetStackInstancesGroupOutputReference <a name="CloudformationStackSetStackInstancesGroupOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets">put_deployment_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides">put_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetDeploymentTargets">reset_deployment_targets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetParameterOverrides">reset_parameter_overrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetRegions">reset_regions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_deployment_targets` <a name="put_deployment_targets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets"></a>

```python
def put_deployment_targets(
  account_filter_type: str = None,
  accounts: typing.List[str] = None,
  accounts_url: str = None,
  organizational_unit_ids: typing.List[str] = None
) -> None
```

###### `account_filter_type`<sup>Optional</sup> <a name="account_filter_type" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets.parameter.accountFilterType"></a>

- *Type:* str

The filter type you want to apply on organizational units and accounts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#account_filter_type CloudformationStackSet#account_filter_type}

---

###### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets.parameter.accounts"></a>

- *Type:* typing.List[str]

AWS accounts that you want to create stack instances in the specified Region(s) for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts CloudformationStackSet#accounts}

---

###### `accounts_url`<sup>Optional</sup> <a name="accounts_url" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets.parameter.accountsUrl"></a>

- *Type:* str

Returns the value of the AccountsUrl property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#accounts_url CloudformationStackSet#accounts_url}

---

###### `organizational_unit_ids`<sup>Optional</sup> <a name="organizational_unit_ids" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putDeploymentTargets.parameter.organizationalUnitIds"></a>

- *Type:* typing.List[str]

The organization root ID or organizational unit (OU) IDs to which StackSets deploys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/cloudformation_stack_set#organizational_unit_ids CloudformationStackSet#organizational_unit_ids}

---

##### `put_parameter_overrides` <a name="put_parameter_overrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides"></a>

```python
def put_parameter_overrides(
  value: IResolvable | typing.List[CloudformationStackSetStackInstancesGroupParameterOverrides]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]

---

##### `reset_deployment_targets` <a name="reset_deployment_targets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetDeploymentTargets"></a>

```python
def reset_deployment_targets() -> None
```

##### `reset_parameter_overrides` <a name="reset_parameter_overrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetParameterOverrides"></a>

```python
def reset_parameter_overrides() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.resetRegions"></a>

```python
def reset_regions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets">deployment_targets</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides">parameter_overrides</a></code> | <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList">CloudformationStackSetStackInstancesGroupParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargetsInput">deployment_targets_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverridesInput">parameter_overrides_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_targets`<sup>Required</sup> <a name="deployment_targets" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargets"></a>

```python
deployment_targets: CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference">CloudformationStackSetStackInstancesGroupDeploymentTargetsOutputReference</a>

---

##### `parameter_overrides`<sup>Required</sup> <a name="parameter_overrides" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverrides"></a>

```python
parameter_overrides: CloudformationStackSetStackInstancesGroupParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList">CloudformationStackSetStackInstancesGroupParameterOverridesList</a>

---

##### `deployment_targets_input`<sup>Optional</sup> <a name="deployment_targets_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.deploymentTargetsInput"></a>

```python
deployment_targets_input: IResolvable | CloudformationStackSetStackInstancesGroupDeploymentTargets
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupDeploymentTargets">CloudformationStackSetStackInstancesGroupDeploymentTargets</a>

---

##### `parameter_overrides_input`<sup>Optional</sup> <a name="parameter_overrides_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.parameterOverridesInput"></a>

```python
parameter_overrides_input: IResolvable | typing.List[CloudformationStackSetStackInstancesGroupParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetStackInstancesGroup
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroup">CloudformationStackSetStackInstancesGroup</a>

---


### CloudformationStackSetStackInstancesGroupParameterOverridesList <a name="CloudformationStackSetStackInstancesGroupParameterOverridesList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationStackSetStackInstancesGroupParameterOverrides]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>]

---


### CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference <a name="CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterKey">reset_parameter_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterValue">reset_parameter_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_parameter_key` <a name="reset_parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterKey"></a>

```python
def reset_parameter_key() -> None
```

##### `reset_parameter_value` <a name="reset_parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.resetParameterValue"></a>

```python
def reset_parameter_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKeyInput">parameter_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValueInput">parameter_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey">parameter_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue">parameter_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `parameter_key_input`<sup>Optional</sup> <a name="parameter_key_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKeyInput"></a>

```python
parameter_key_input: str
```

- *Type:* str

---

##### `parameter_value_input`<sup>Optional</sup> <a name="parameter_value_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValueInput"></a>

```python
parameter_value_input: str
```

- *Type:* str

---

##### `parameter_key`<sup>Required</sup> <a name="parameter_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterKey"></a>

```python
parameter_key: str
```

- *Type:* str

---

##### `parameter_value`<sup>Required</sup> <a name="parameter_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.parameterValue"></a>

```python
parameter_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverridesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetStackInstancesGroupParameterOverrides
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetStackInstancesGroupParameterOverrides">CloudformationStackSetStackInstancesGroupParameterOverrides</a>

---


### CloudformationStackSetTagsList <a name="CloudformationStackSetTagsList" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CloudformationStackSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CloudformationStackSetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>]

---


### CloudformationStackSetTagsOutputReference <a name="CloudformationStackSetTagsOutputReference" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import cloudformation_stack_set

cloudformationStackSet.CloudformationStackSetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CloudformationStackSetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.cloudformationStackSet.CloudformationStackSetTags">CloudformationStackSetTags</a>

---



