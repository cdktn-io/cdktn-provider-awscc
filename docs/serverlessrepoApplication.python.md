# `serverlessrepoApplication` Submodule <a name="`serverlessrepoApplication` Submodule" id="@cdktn/provider-awscc.serverlessrepoApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessrepoApplication <a name="ServerlessrepoApplication" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application awscc_serverlessrepo_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplication(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  author: str,
  description: str,
  name: str,
  home_page_url: str = None,
  labels: typing.List[str] = None,
  license_body: str = None,
  readme_body: str = None,
  semantic_version: str = None,
  source_code_url: str = None,
  spdx_license_id: str = None,
  template_body: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.author">author</a></code> | <code>str</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.homePageUrl">home_page_url</a></code> | <code>str</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.labels">labels</a></code> | <code>typing.List[str]</code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.licenseBody">license_body</a></code> | <code>str</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.readmeBody">readme_body</a></code> | <code>str</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.semanticVersion">semantic_version</a></code> | <code>str</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.sourceCodeUrl">source_code_url</a></code> | <code>str</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.spdxLicenseId">spdx_license_id</a></code> | <code>str</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.templateBody">template_body</a></code> | <code>str</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.author"></a>

- *Type:* str

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.description"></a>

- *Type:* str

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.name"></a>

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `home_page_url`<sup>Optional</sup> <a name="home_page_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.homePageUrl"></a>

- *Type:* str

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.labels"></a>

- *Type:* typing.List[str]

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `license_body`<sup>Optional</sup> <a name="license_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.licenseBody"></a>

- *Type:* str

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `readme_body`<sup>Optional</sup> <a name="readme_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.readmeBody"></a>

- *Type:* str

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `semantic_version`<sup>Optional</sup> <a name="semantic_version" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.semanticVersion"></a>

- *Type:* str

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `source_code_url`<sup>Optional</sup> <a name="source_code_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.sourceCodeUrl"></a>

- *Type:* str

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `spdx_license_id`<sup>Optional</sup> <a name="spdx_license_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.spdxLicenseId"></a>

- *Type:* str

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.Initializer.parameter.templateBody"></a>

- *Type:* str

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl">reset_home_page_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody">reset_license_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody">reset_readme_body</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion">reset_semantic_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl">reset_source_code_url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId">reset_spdx_license_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody">reset_template_body</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_home_page_url` <a name="reset_home_page_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetHomePageUrl"></a>

```python
def reset_home_page_url() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_license_body` <a name="reset_license_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetLicenseBody"></a>

```python
def reset_license_body() -> None
```

##### `reset_readme_body` <a name="reset_readme_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetReadmeBody"></a>

```python
def reset_readme_body() -> None
```

##### `reset_semantic_version` <a name="reset_semantic_version" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSemanticVersion"></a>

```python
def reset_semantic_version() -> None
```

##### `reset_source_code_url` <a name="reset_source_code_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSourceCodeUrl"></a>

```python
def reset_source_code_url() -> None
```

##### `reset_spdx_license_id` <a name="reset_spdx_license_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetSpdxLicenseId"></a>

```python
def reset_spdx_license_id() -> None
```

##### `reset_template_body` <a name="reset_template_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.resetTemplateBody"></a>

```python
def reset_template_body() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplication.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplication.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplication.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplication.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ServerlessrepoApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServerlessrepoApplication to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServerlessrepoApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ServerlessrepoApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor">is_verified_author</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput">author_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput">home_page_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput">labels_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput">license_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput">readme_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput">semantic_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput">source_code_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput">spdx_license_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput">template_body_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl">home_page_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels">labels</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody">license_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody">readme_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion">semantic_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl">source_code_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId">spdx_license_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody">template_body</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_verified_author`<sup>Required</sup> <a name="is_verified_author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.isVerifiedAuthor"></a>

```python
is_verified_author: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `author_input`<sup>Optional</sup> <a name="author_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.authorInput"></a>

```python
author_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `home_page_url_input`<sup>Optional</sup> <a name="home_page_url_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrlInput"></a>

```python
home_page_url_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labelsInput"></a>

```python
labels_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license_body_input`<sup>Optional</sup> <a name="license_body_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBodyInput"></a>

```python
license_body_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `readme_body_input`<sup>Optional</sup> <a name="readme_body_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBodyInput"></a>

```python
readme_body_input: str
```

- *Type:* str

---

##### `semantic_version_input`<sup>Optional</sup> <a name="semantic_version_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersionInput"></a>

```python
semantic_version_input: str
```

- *Type:* str

---

##### `source_code_url_input`<sup>Optional</sup> <a name="source_code_url_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrlInput"></a>

```python
source_code_url_input: str
```

- *Type:* str

---

##### `spdx_license_id_input`<sup>Optional</sup> <a name="spdx_license_id_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseIdInput"></a>

```python
spdx_license_id_input: str
```

- *Type:* str

---

##### `template_body_input`<sup>Optional</sup> <a name="template_body_input" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBodyInput"></a>

```python
template_body_input: str
```

- *Type:* str

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `home_page_url`<sup>Required</sup> <a name="home_page_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.homePageUrl"></a>

```python
home_page_url: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `license_body`<sup>Required</sup> <a name="license_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.licenseBody"></a>

```python
license_body: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `readme_body`<sup>Required</sup> <a name="readme_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.readmeBody"></a>

```python
readme_body: str
```

- *Type:* str

---

##### `semantic_version`<sup>Required</sup> <a name="semantic_version" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.semanticVersion"></a>

```python
semantic_version: str
```

- *Type:* str

---

##### `source_code_url`<sup>Required</sup> <a name="source_code_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.sourceCodeUrl"></a>

```python
source_code_url: str
```

- *Type:* str

---

##### `spdx_license_id`<sup>Required</sup> <a name="spdx_license_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.spdxLicenseId"></a>

```python
spdx_license_id: str
```

- *Type:* str

---

##### `template_body`<sup>Required</sup> <a name="template_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplication.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessrepoApplicationConfig <a name="ServerlessrepoApplicationConfig" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import serverlessrepo_application

serverlessrepoApplication.ServerlessrepoApplicationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  author: str,
  description: str,
  name: str,
  home_page_url: str = None,
  labels: typing.List[str] = None,
  license_body: str = None,
  readme_body: str = None,
  semantic_version: str = None,
  source_code_url: str = None,
  spdx_license_id: str = None,
  template_body: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author">author</a></code> | <code>str</code> | The name of the author publishing the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description">description</a></code> | <code>str</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name">name</a></code> | <code>str</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl">home_page_url</a></code> | <code>str</code> | A URL with more information about the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels">labels</a></code> | <code>typing.List[str]</code> | Labels to improve discovery of apps in search results. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody">license_body</a></code> | <code>str</code> | A local text file that contains the license of the app. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody">readme_body</a></code> | <code>str</code> | A text readme file in Markdown language that contains a more detailed description of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion">semantic_version</a></code> | <code>str</code> | The semantic version of the application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl">source_code_url</a></code> | <code>str</code> | A link to a public repository for the source code of your application. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId">spdx_license_id</a></code> | <code>str</code> | A valid identifier from https://spdx.org/licenses/. |
| <code><a href="#@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody">template_body</a></code> | <code>str</code> | The local raw packaged AWS SAM template file of your application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.author"></a>

```python
author: str
```

- *Type:* str

The name of the author publishing the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#author ServerlessrepoApplication#author}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#description ServerlessrepoApplication#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#name ServerlessrepoApplication#name}

---

##### `home_page_url`<sup>Optional</sup> <a name="home_page_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.homePageUrl"></a>

```python
home_page_url: str
```

- *Type:* str

A URL with more information about the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#home_page_url ServerlessrepoApplication#home_page_url}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.labels"></a>

```python
labels: typing.List[str]
```

- *Type:* typing.List[str]

Labels to improve discovery of apps in search results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#labels ServerlessrepoApplication#labels}

---

##### `license_body`<sup>Optional</sup> <a name="license_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.licenseBody"></a>

```python
license_body: str
```

- *Type:* str

A local text file that contains the license of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#license_body ServerlessrepoApplication#license_body}

---

##### `readme_body`<sup>Optional</sup> <a name="readme_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.readmeBody"></a>

```python
readme_body: str
```

- *Type:* str

A text readme file in Markdown language that contains a more detailed description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#readme_body ServerlessrepoApplication#readme_body}

---

##### `semantic_version`<sup>Optional</sup> <a name="semantic_version" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.semanticVersion"></a>

```python
semantic_version: str
```

- *Type:* str

The semantic version of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#semantic_version ServerlessrepoApplication#semantic_version}

---

##### `source_code_url`<sup>Optional</sup> <a name="source_code_url" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.sourceCodeUrl"></a>

```python
source_code_url: str
```

- *Type:* str

A link to a public repository for the source code of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#source_code_url ServerlessrepoApplication#source_code_url}

---

##### `spdx_license_id`<sup>Optional</sup> <a name="spdx_license_id" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.spdxLicenseId"></a>

```python
spdx_license_id: str
```

- *Type:* str

A valid identifier from https://spdx.org/licenses/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#spdx_license_id ServerlessrepoApplication#spdx_license_id}

---

##### `template_body`<sup>Optional</sup> <a name="template_body" id="@cdktn/provider-awscc.serverlessrepoApplication.ServerlessrepoApplicationConfig.property.templateBody"></a>

```python
template_body: str
```

- *Type:* str

The local raw packaged AWS SAM template file of your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/serverlessrepo_application#template_body ServerlessrepoApplication#template_body}

---



