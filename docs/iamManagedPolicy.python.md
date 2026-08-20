# `iamManagedPolicy` Submodule <a name="`iamManagedPolicy` Submodule" id="@cdktn/provider-awscc.iamManagedPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamManagedPolicy <a name="IamManagedPolicy" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy awscc_iam_managed_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_document: str,
  description: str = None,
  groups: typing.List[str] = None,
  managed_policy_name: str = None,
  path: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.policyDocument">policy_document</a></code> | <code>str</code> | The JSON policy document that you want to use as the content for the new policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A friendly description of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.groups">groups</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the group to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.managedPolicyName">managed_policy_name</a></code> | <code>str</code> | The friendly name of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.path">path</a></code> | <code>str</code> | The path for the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.roles">roles</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the role to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.users">users</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the IAM user to attach the policy to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.policyDocument"></a>

- *Type:* str

The JSON policy document that you want to use as the content for the new policy.

You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*.
The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:

* Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
* The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
* The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#policy_document IamManagedPolicy#policy_document}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.description"></a>

- *Type:* str

A friendly description of the policy.

Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
The policy description is immutable. After a value is assigned, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#description IamManagedPolicy#description}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.groups"></a>

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the group to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#groups IamManagedPolicy#groups}

---

##### `managed_policy_name`<sup>Optional</sup> <a name="managed_policy_name" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.managedPolicyName"></a>

- *Type:* str

The friendly name of the policy.

If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#managed_policy_name IamManagedPolicy#managed_policy_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.path"></a>

- *Type:* str

The path for the policy.

For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
This parameter is optional. If it is not included, it defaults to a slash (/).
This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
You cannot use an asterisk (*) in the path name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#path IamManagedPolicy#path}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.roles"></a>

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the role to attach the policy to.

This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
If an external policy (such as `AWS::IAM::Policy` or `AWS::IAM::ManagedPolicy`) has a `Ref` to a role and if a resource (such as `AWS::ECS::Service`) also has a `Ref` to the same role, add a `DependsOn` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an `AWS::ECS::Service` resource, the `DependsOn` attribute ensures that CFN deletes the `AWS::ECS::Service` resource before deleting its role's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#roles IamManagedPolicy#roles}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.Initializer.parameter.users"></a>

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the IAM user to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#users IamManagedPolicy#users}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetGroups">reset_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetManagedPolicyName">reset_managed_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetRoles">reset_roles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetUsers">reset_users</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_groups` <a name="reset_groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetGroups"></a>

```python
def reset_groups() -> None
```

##### `reset_managed_policy_name` <a name="reset_managed_policy_name" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetManagedPolicyName"></a>

```python
def reset_managed_policy_name() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_roles` <a name="reset_roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetRoles"></a>

```python
def reset_roles() -> None
```

##### `reset_users` <a name="reset_users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.resetUsers"></a>

```python
def reset_users() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a IamManagedPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a IamManagedPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamManagedPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamManagedPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IamManagedPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.attachmentCount">attachment_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.createDate">create_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.defaultVersionId">default_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.isAttachable">is_attachable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.permissionsBoundaryUsageCount">permissions_boundary_usage_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyArn">policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyId">policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.updateDate">update_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groupsInput">groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyNameInput">managed_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocumentInput">policy_document_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.rolesInput">roles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.usersInput">users_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyName">managed_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocument">policy_document</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.roles">roles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.users">users</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `attachment_count`<sup>Required</sup> <a name="attachment_count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.attachmentCount"></a>

```python
attachment_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `create_date`<sup>Required</sup> <a name="create_date" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.createDate"></a>

```python
create_date: str
```

- *Type:* str

---

##### `default_version_id`<sup>Required</sup> <a name="default_version_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.defaultVersionId"></a>

```python
default_version_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_attachable`<sup>Required</sup> <a name="is_attachable" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.isAttachable"></a>

```python
is_attachable: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `permissions_boundary_usage_count`<sup>Required</sup> <a name="permissions_boundary_usage_count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.permissionsBoundaryUsageCount"></a>

```python
permissions_boundary_usage_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_arn`<sup>Required</sup> <a name="policy_arn" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyArn"></a>

```python
policy_arn: str
```

- *Type:* str

---

##### `policy_id`<sup>Required</sup> <a name="policy_id" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyId"></a>

```python
policy_id: str
```

- *Type:* str

---

##### `update_date`<sup>Required</sup> <a name="update_date" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.updateDate"></a>

```python
update_date: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `groups_input`<sup>Optional</sup> <a name="groups_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groupsInput"></a>

```python
groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_policy_name_input`<sup>Optional</sup> <a name="managed_policy_name_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyNameInput"></a>

```python
managed_policy_name_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `policy_document_input`<sup>Optional</sup> <a name="policy_document_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocumentInput"></a>

```python
policy_document_input: str
```

- *Type:* str

---

##### `roles_input`<sup>Optional</sup> <a name="roles_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.rolesInput"></a>

```python
roles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users_input`<sup>Optional</sup> <a name="users_input" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.usersInput"></a>

```python
users_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `managed_policy_name`<sup>Required</sup> <a name="managed_policy_name" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.managedPolicyName"></a>

```python
managed_policy_name: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `users`<sup>Required</sup> <a name="users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamManagedPolicyConfig <a name="IamManagedPolicyConfig" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import iam_managed_policy

iamManagedPolicy.IamManagedPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  policy_document: str,
  description: str = None,
  groups: typing.List[str] = None,
  managed_policy_name: str = None,
  path: str = None,
  roles: typing.List[str] = None,
  users: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.policyDocument">policy_document</a></code> | <code>str</code> | The JSON policy document that you want to use as the content for the new policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.description">description</a></code> | <code>str</code> | A friendly description of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.groups">groups</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the group to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.managedPolicyName">managed_policy_name</a></code> | <code>str</code> | The friendly name of the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.path">path</a></code> | <code>str</code> | The path for the policy. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.roles">roles</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the role to attach the policy to. |
| <code><a href="#@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.users">users</a></code> | <code>typing.List[str]</code> | The name (friendly name, not ARN) of the IAM user to attach the policy to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `policy_document`<sup>Required</sup> <a name="policy_document" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.policyDocument"></a>

```python
policy_document: str
```

- *Type:* str

The JSON policy document that you want to use as the content for the new policy.

You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*.
The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:

* Any printable ASCII character ranging from the space character (`\u0020`) through the end of the ASCII character range
* The printable characters in the Basic Latin and Latin-1 Supplement character set (through `\u00FF`)
* The special characters tab (`\u0009`), line feed (`\u000A`), and carriage return (`\u000D`)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#policy_document IamManagedPolicy#policy_document}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A friendly description of the policy.

Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
The policy description is immutable. After a value is assigned, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#description IamManagedPolicy#description}

---

##### `groups`<sup>Optional</sup> <a name="groups" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the group to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#groups IamManagedPolicy#groups}

---

##### `managed_policy_name`<sup>Optional</sup> <a name="managed_policy_name" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.managedPolicyName"></a>

```python
managed_policy_name: str
```

- *Type:* str

The friendly name of the policy.

If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
If you specify a name, you must specify the `CAPABILITY_NAMED_IAM` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using `Fn::Join` and `AWS::Region` to create a Region-specific name, as in the following example: `{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#managed_policy_name IamManagedPolicy#managed_policy_name}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.path"></a>

```python
path: str
```

- *Type:* str

The path for the policy.

For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
This parameter is optional. If it is not included, it defaults to a slash (/).
This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (`\u0021`) through the DEL character (`\u007F`), including most punctuation characters, digits, and upper and lowercased letters.
You cannot use an asterisk (*) in the path name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#path IamManagedPolicy#path}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.roles"></a>

```python
roles: typing.List[str]
```

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the role to attach the policy to.

This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
If an external policy (such as `AWS::IAM::Policy` or `AWS::IAM::ManagedPolicy`) has a `Ref` to a role and if a resource (such as `AWS::ECS::Service`) also has a `Ref` to the same role, add a `DependsOn` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an `AWS::ECS::Service` resource, the `DependsOn` attribute ensures that CFN deletes the `AWS::ECS::Service` resource before deleting its role's policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#roles IamManagedPolicy#roles}

---

##### `users`<sup>Optional</sup> <a name="users" id="@cdktn/provider-awscc.iamManagedPolicy.IamManagedPolicyConfig.property.users"></a>

```python
users: typing.List[str]
```

- *Type:* typing.List[str]

The name (friendly name, not ARN) of the IAM user to attach the policy to.

This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iam_managed_policy#users IamManagedPolicy#users}

---



