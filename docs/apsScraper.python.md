# `apsScraper` Submodule <a name="`apsScraper` Submodule" id="@cdktn/provider-awscc.apsScraper"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsScraper <a name="ApsScraper" id="@cdktn/provider-awscc.apsScraper.ApsScraper"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper awscc_aps_scraper}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraper(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination: ApsScraperDestination,
  scrape_configuration: ApsScraperScrapeConfiguration,
  source: ApsScraperSource,
  alias: str = None,
  role_configuration: ApsScraperRoleConfiguration = None,
  scraper_logging_configuration: ApsScraperScraperLoggingConfiguration = None,
  tags: IResolvable | typing.List[ApsScraperTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | Scraper metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scrapeConfiguration">scrape_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | Scraper configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | Scraper metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Scraper alias. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.roleConfiguration">role_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | Role configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scraperLoggingConfiguration">scraper_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | Configuration for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.destination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

Scraper metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#destination ApsScraper#destination}

---

##### `scrape_configuration`<sup>Required</sup> <a name="scrape_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scrapeConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

Scraper configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scrape_configuration ApsScraper#scrape_configuration}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

Scraper metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source ApsScraper#source}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.alias"></a>

- *Type:* str

Scraper alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#alias ApsScraper#alias}

---

##### `role_configuration`<sup>Optional</sup> <a name="role_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.roleConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

Role configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#role_configuration ApsScraper#role_configuration}

---

##### `scraper_logging_configuration`<sup>Optional</sup> <a name="scraper_logging_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.scraperLoggingConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

Configuration for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_logging_configuration ApsScraper#scraper_logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#tags ApsScraper#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration">put_role_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration">put_scrape_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration">put_scraper_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putSource">put_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration">reset_role_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration">reset_scraper_logging_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apsScraper.ApsScraper.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apsScraper.ApsScraper.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsScraper.ApsScraper.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apsScraper.ApsScraper.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraper.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_destination` <a name="put_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination"></a>

```python
def put_destination(
  amp_configuration: ApsScraperDestinationAmpConfiguration = None,
  cloudwatch_configuration: ApsScraperDestinationCloudwatchConfiguration = None
) -> None
```

###### `amp_configuration`<sup>Optional</sup> <a name="amp_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination.parameter.ampConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

Configuration for Amazon Managed Prometheus metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#amp_configuration ApsScraper#amp_configuration}

---

###### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putDestination.parameter.cloudwatchConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

Configuration for CloudWatch metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_configuration ApsScraper#cloudwatch_configuration}

---

##### `put_role_configuration` <a name="put_role_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration"></a>

```python
def put_role_configuration(
  source_role_arn: str = None,
  target_role_arn: str = None
) -> None
```

###### `source_role_arn`<sup>Optional</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration.parameter.sourceRoleArn"></a>

- *Type:* str

IAM Role in source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source_role_arn ApsScraper#source_role_arn}

---

###### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putRoleConfiguration.parameter.targetRoleArn"></a>

- *Type:* str

IAM Role in the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#target_role_arn ApsScraper#target_role_arn}

---

##### `put_scrape_configuration` <a name="put_scrape_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration"></a>

```python
def put_scrape_configuration(
  configuration_blob: str = None
) -> None
```

###### `configuration_blob`<sup>Optional</sup> <a name="configuration_blob" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScrapeConfiguration.parameter.configurationBlob"></a>

- *Type:* str

Prometheus compatible scrape configuration in base64 encoded blob format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#configuration_blob ApsScraper#configuration_blob}

---

##### `put_scraper_logging_configuration` <a name="put_scraper_logging_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration"></a>

```python
def put_scraper_logging_configuration(
  logging_destination: ApsScraperScraperLoggingConfigurationLoggingDestination = None,
  scraper_components: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents] = None
) -> None
```

###### `logging_destination`<sup>Optional</sup> <a name="logging_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration.parameter.loggingDestination"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

Destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#logging_destination ApsScraper#logging_destination}

---

###### `scraper_components`<sup>Optional</sup> <a name="scraper_components" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putScraperLoggingConfiguration.parameter.scraperComponents"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}.

---

##### `put_source` <a name="put_source" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource"></a>

```python
def put_source(
  eks_configuration: ApsScraperSourceEksConfiguration = None,
  vpc_configuration: ApsScraperSourceVpcConfiguration = None
) -> None
```

###### `eks_configuration`<sup>Optional</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource.parameter.eksConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

Configuration for EKS metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#eks_configuration ApsScraper#eks_configuration}

---

###### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putSource.parameter.vpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

Configuration for VPC metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#vpc_configuration ApsScraper#vpc_configuration}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApsScraperTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraper.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]

---

##### `reset_alias` <a name="reset_alias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_role_configuration` <a name="reset_role_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetRoleConfiguration"></a>

```python
def reset_role_configuration() -> None
```

##### `reset_scraper_logging_configuration` <a name="reset_scraper_logging_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetScraperLoggingConfiguration"></a>

```python
def reset_scraper_logging_configuration() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraper.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraper.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraper.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apsScraper.ApsScraper.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraper.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApsScraper resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApsScraper to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApsScraper that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApsScraper to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration">role_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration">scrape_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId">scraper_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration">scraper_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput">destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput">role_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput">scrape_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput">scraper_logging_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput">source_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias">alias</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destination"></a>

```python
destination: ApsScraperDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference">ApsScraperDestinationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `role_configuration`<sup>Required</sup> <a name="role_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfiguration"></a>

```python
role_configuration: ApsScraperRoleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference">ApsScraperRoleConfigurationOutputReference</a>

---

##### `scrape_configuration`<sup>Required</sup> <a name="scrape_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfiguration"></a>

```python
scrape_configuration: ApsScraperScrapeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference">ApsScraperScrapeConfigurationOutputReference</a>

---

##### `scraper_id`<sup>Required</sup> <a name="scraper_id" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperId"></a>

```python
scraper_id: str
```

- *Type:* str

---

##### `scraper_logging_configuration`<sup>Required</sup> <a name="scraper_logging_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfiguration"></a>

```python
scraper_logging_configuration: ApsScraperScraperLoggingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference">ApsScraperScraperLoggingConfigurationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.source"></a>

```python
source: ApsScraperSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference">ApsScraperSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tags"></a>

```python
tags: ApsScraperTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList">ApsScraperTagsList</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.destinationInput"></a>

```python
destination_input: IResolvable | ApsScraperDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---

##### `role_configuration_input`<sup>Optional</sup> <a name="role_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.roleConfigurationInput"></a>

```python
role_configuration_input: IResolvable | ApsScraperRoleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---

##### `scrape_configuration_input`<sup>Optional</sup> <a name="scrape_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scrapeConfigurationInput"></a>

```python
scrape_configuration_input: IResolvable | ApsScraperScrapeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---

##### `scraper_logging_configuration_input`<sup>Optional</sup> <a name="scraper_logging_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.scraperLoggingConfigurationInput"></a>

```python
scraper_logging_configuration_input: IResolvable | ApsScraperScraperLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.sourceInput"></a>

```python
source_input: IResolvable | ApsScraperSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApsScraperTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apsScraper.ApsScraper.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApsScraperConfig <a name="ApsScraperConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  destination: ApsScraperDestination,
  scrape_configuration: ApsScraperScrapeConfiguration,
  source: ApsScraperSource,
  alias: str = None,
  role_configuration: ApsScraperRoleConfiguration = None,
  scraper_logging_configuration: ApsScraperScraperLoggingConfiguration = None,
  tags: IResolvable | typing.List[ApsScraperTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination">destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | Scraper metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration">scrape_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | Scraper configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | Scraper metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias">alias</a></code> | <code>str</code> | Scraper alias. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration">role_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | Role configuration. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration">scraper_logging_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | Configuration for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.destination"></a>

```python
destination: ApsScraperDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

Scraper metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#destination ApsScraper#destination}

---

##### `scrape_configuration`<sup>Required</sup> <a name="scrape_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scrapeConfiguration"></a>

```python
scrape_configuration: ApsScraperScrapeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

Scraper configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scrape_configuration ApsScraper#scrape_configuration}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.source"></a>

```python
source: ApsScraperSource
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

Scraper metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source ApsScraper#source}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Scraper alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#alias ApsScraper#alias}

---

##### `role_configuration`<sup>Optional</sup> <a name="role_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.roleConfiguration"></a>

```python
role_configuration: ApsScraperRoleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

Role configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#role_configuration ApsScraper#role_configuration}

---

##### `scraper_logging_configuration`<sup>Optional</sup> <a name="scraper_logging_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.scraperLoggingConfiguration"></a>

```python
scraper_logging_configuration: ApsScraperScraperLoggingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

Configuration for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_logging_configuration ApsScraper#scraper_logging_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apsScraper.ApsScraperConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApsScraperTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#tags ApsScraper#tags}

---

### ApsScraperDestination <a name="ApsScraperDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestination(
  amp_configuration: ApsScraperDestinationAmpConfiguration = None,
  cloudwatch_configuration: ApsScraperDestinationCloudwatchConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration">amp_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | Configuration for Amazon Managed Prometheus metrics destination. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | Configuration for CloudWatch metrics destination. |

---

##### `amp_configuration`<sup>Optional</sup> <a name="amp_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.ampConfiguration"></a>

```python
amp_configuration: ApsScraperDestinationAmpConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

Configuration for Amazon Managed Prometheus metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#amp_configuration ApsScraper#amp_configuration}

---

##### `cloudwatch_configuration`<sup>Optional</sup> <a name="cloudwatch_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestination.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: ApsScraperDestinationCloudwatchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

Configuration for CloudWatch metrics destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_configuration ApsScraper#cloudwatch_configuration}

---

### ApsScraperDestinationAmpConfiguration <a name="ApsScraperDestinationAmpConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestinationAmpConfiguration(
  workspace_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn">workspace_arn</a></code> | <code>str</code> | ARN of an Amazon Managed Prometheus workspace. |

---

##### `workspace_arn`<sup>Optional</sup> <a name="workspace_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration.property.workspaceArn"></a>

```python
workspace_arn: str
```

- *Type:* str

ARN of an Amazon Managed Prometheus workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#workspace_arn ApsScraper#workspace_arn}

---

### ApsScraperDestinationCloudwatchConfiguration <a name="ApsScraperDestinationCloudwatchConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestinationCloudwatchConfiguration(
  dataset_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn">dataset_arn</a></code> | <code>str</code> | ARN of a CloudWatch dataset. |

---

##### `dataset_arn`<sup>Optional</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

ARN of a CloudWatch dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#dataset_arn ApsScraper#dataset_arn}

---

### ApsScraperRoleConfiguration <a name="ApsScraperRoleConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperRoleConfiguration(
  source_role_arn: str = None,
  target_role_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | IAM Role in source account. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | IAM Role in the target account. |

---

##### `source_role_arn`<sup>Optional</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

IAM Role in source account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#source_role_arn ApsScraper#source_role_arn}

---

##### `target_role_arn`<sup>Optional</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

IAM Role in the target account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#target_role_arn ApsScraper#target_role_arn}

---

### ApsScraperScrapeConfiguration <a name="ApsScraperScrapeConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScrapeConfiguration(
  configuration_blob: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob">configuration_blob</a></code> | <code>str</code> | Prometheus compatible scrape configuration in base64 encoded blob format. |

---

##### `configuration_blob`<sup>Optional</sup> <a name="configuration_blob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration.property.configurationBlob"></a>

```python
configuration_blob: str
```

- *Type:* str

Prometheus compatible scrape configuration in base64 encoded blob format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#configuration_blob ApsScraper#configuration_blob}

---

### ApsScraperScraperLoggingConfiguration <a name="ApsScraperScraperLoggingConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfiguration(
  logging_destination: ApsScraperScraperLoggingConfigurationLoggingDestination = None,
  scraper_components: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination">logging_destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | Destination for scraper logging. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents">scraper_components</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}. |

---

##### `logging_destination`<sup>Optional</sup> <a name="logging_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.loggingDestination"></a>

```python
logging_destination: ApsScraperScraperLoggingConfigurationLoggingDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

Destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#logging_destination ApsScraper#logging_destination}

---

##### `scraper_components`<sup>Optional</sup> <a name="scraper_components" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration.property.scraperComponents"></a>

```python
scraper_components: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#scraper_components ApsScraper#scraper_components}.

---

### ApsScraperScraperLoggingConfigurationLoggingDestination <a name="ApsScraperScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination(
  cloudwatch_logs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for scraper logging. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

Represents a cloudwatch logs destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_logs ApsScraper#cloudwatch_logs}

---

### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs(
  log_group_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | ARN of the CloudWatch log group. |

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

ARN of the CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#log_group_arn ApsScraper#log_group_arn}

---

### ApsScraperScraperLoggingConfigurationScraperComponents <a name="ApsScraperScraperLoggingConfigurationScraperComponents" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents(
  config: ApsScraperScraperLoggingConfigurationScraperComponentsConfig = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type">type</a></code> | <code>str</code> | Type of scraper component. |

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.config"></a>

```python
config: ApsScraperScraperLoggingConfigurationScraperComponentsConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#config ApsScraper#config}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents.property.type"></a>

```python
type: str
```

- *Type:* str

Type of scraper component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#type ApsScraper#type}

---

### ApsScraperScraperLoggingConfigurationScraperComponentsConfig <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfig" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig(
  options: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options">options</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}. |

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}.

---

### ApsScraperSource <a name="ApsScraperSource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSource(
  eks_configuration: ApsScraperSourceEksConfiguration = None,
  vpc_configuration: ApsScraperSourceVpcConfiguration = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration">eks_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | Configuration for EKS metrics source. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | Configuration for VPC metrics source. |

---

##### `eks_configuration`<sup>Optional</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.eksConfiguration"></a>

```python
eks_configuration: ApsScraperSourceEksConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

Configuration for EKS metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#eks_configuration ApsScraper#eks_configuration}

---

##### `vpc_configuration`<sup>Optional</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSource.property.vpcConfiguration"></a>

```python
vpc_configuration: ApsScraperSourceVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

Configuration for VPC metrics source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#vpc_configuration ApsScraper#vpc_configuration}

---

### ApsScraperSourceEksConfiguration <a name="ApsScraperSourceEksConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSourceEksConfiguration(
  cluster_arn: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn">cluster_arn</a></code> | <code>str</code> | ARN of an EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | List of subnet IDs. |

---

##### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

ARN of an EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cluster_arn ApsScraper#cluster_arn}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperSourceVpcConfiguration <a name="ApsScraperSourceVpcConfiguration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSourceVpcConfiguration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | List of security group IDs. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | List of subnet IDs. |

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

### ApsScraperTags <a name="ApsScraperTags" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#key ApsScraper#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#value ApsScraper#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsScraperDestinationAmpConfigurationOutputReference <a name="ApsScraperDestinationAmpConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestinationAmpConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn">reset_workspace_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_workspace_arn` <a name="reset_workspace_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.resetWorkspaceArn"></a>

```python
def reset_workspace_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput">workspace_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn">workspace_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `workspace_arn_input`<sup>Optional</sup> <a name="workspace_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArnInput"></a>

```python
workspace_arn_input: str
```

- *Type:* str

---

##### `workspace_arn`<sup>Required</sup> <a name="workspace_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.workspaceArn"></a>

```python
workspace_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperDestinationAmpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---


### ApsScraperDestinationCloudwatchConfigurationOutputReference <a name="ApsScraperDestinationCloudwatchConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn">reset_dataset_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dataset_arn` <a name="reset_dataset_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.resetDatasetArn"></a>

```python
def reset_dataset_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput">dataset_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn">dataset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dataset_arn_input`<sup>Optional</sup> <a name="dataset_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArnInput"></a>

```python
dataset_arn_input: str
```

- *Type:* str

---

##### `dataset_arn`<sup>Required</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.datasetArn"></a>

```python
dataset_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperDestinationCloudwatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---


### ApsScraperDestinationOutputReference <a name="ApsScraperDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration">put_amp_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration">put_cloudwatch_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration">reset_amp_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration">reset_cloudwatch_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_amp_configuration` <a name="put_amp_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration"></a>

```python
def put_amp_configuration(
  workspace_arn: str = None
) -> None
```

###### `workspace_arn`<sup>Optional</sup> <a name="workspace_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putAmpConfiguration.parameter.workspaceArn"></a>

- *Type:* str

ARN of an Amazon Managed Prometheus workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#workspace_arn ApsScraper#workspace_arn}

---

##### `put_cloudwatch_configuration` <a name="put_cloudwatch_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration"></a>

```python
def put_cloudwatch_configuration(
  dataset_arn: str = None
) -> None
```

###### `dataset_arn`<sup>Optional</sup> <a name="dataset_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.putCloudwatchConfiguration.parameter.datasetArn"></a>

- *Type:* str

ARN of a CloudWatch dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#dataset_arn ApsScraper#dataset_arn}

---

##### `reset_amp_configuration` <a name="reset_amp_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetAmpConfiguration"></a>

```python
def reset_amp_configuration() -> None
```

##### `reset_cloudwatch_configuration` <a name="reset_cloudwatch_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.resetCloudwatchConfiguration"></a>

```python
def reset_cloudwatch_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration">amp_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration">cloudwatch_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput">amp_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput">cloudwatch_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amp_configuration`<sup>Required</sup> <a name="amp_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfiguration"></a>

```python
amp_configuration: ApsScraperDestinationAmpConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfigurationOutputReference">ApsScraperDestinationAmpConfigurationOutputReference</a>

---

##### `cloudwatch_configuration`<sup>Required</sup> <a name="cloudwatch_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfiguration"></a>

```python
cloudwatch_configuration: ApsScraperDestinationCloudwatchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfigurationOutputReference">ApsScraperDestinationCloudwatchConfigurationOutputReference</a>

---

##### `amp_configuration_input`<sup>Optional</sup> <a name="amp_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.ampConfigurationInput"></a>

```python
amp_configuration_input: IResolvable | ApsScraperDestinationAmpConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationAmpConfiguration">ApsScraperDestinationAmpConfiguration</a>

---

##### `cloudwatch_configuration_input`<sup>Optional</sup> <a name="cloudwatch_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.cloudwatchConfigurationInput"></a>

```python
cloudwatch_configuration_input: IResolvable | ApsScraperDestinationCloudwatchConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestinationCloudwatchConfiguration">ApsScraperDestinationCloudwatchConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperDestination">ApsScraperDestination</a>

---


### ApsScraperRoleConfigurationOutputReference <a name="ApsScraperRoleConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperRoleConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn">reset_source_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn">reset_target_role_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_source_role_arn` <a name="reset_source_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetSourceRoleArn"></a>

```python
def reset_source_role_arn() -> None
```

##### `reset_target_role_arn` <a name="reset_target_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.resetTargetRoleArn"></a>

```python
def reset_target_role_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput">source_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput">target_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn">source_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn">target_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `source_role_arn_input`<sup>Optional</sup> <a name="source_role_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArnInput"></a>

```python
source_role_arn_input: str
```

- *Type:* str

---

##### `target_role_arn_input`<sup>Optional</sup> <a name="target_role_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArnInput"></a>

```python
target_role_arn_input: str
```

- *Type:* str

---

##### `source_role_arn`<sup>Required</sup> <a name="source_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.sourceRoleArn"></a>

```python
source_role_arn: str
```

- *Type:* str

---

##### `target_role_arn`<sup>Required</sup> <a name="target_role_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.targetRoleArn"></a>

```python
target_role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperRoleConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperRoleConfiguration">ApsScraperRoleConfiguration</a>

---


### ApsScraperScrapeConfigurationOutputReference <a name="ApsScraperScrapeConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScrapeConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob">reset_configuration_blob</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_blob` <a name="reset_configuration_blob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.resetConfigurationBlob"></a>

```python
def reset_configuration_blob() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput">configuration_blob_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob">configuration_blob</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_blob_input`<sup>Optional</sup> <a name="configuration_blob_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlobInput"></a>

```python
configuration_blob_input: str
```

- *Type:* str

---

##### `configuration_blob`<sup>Required</sup> <a name="configuration_blob" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.configurationBlob"></a>

```python
configuration_blob: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScrapeConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScrapeConfiguration">ApsScraperScrapeConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference <a name="ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  log_group_arn: str = None
) -> None
```

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.logGroupArn"></a>

- *Type:* str

ARN of the CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#log_group_arn ApsScraper#log_group_arn}

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---


### ApsScraperScraperLoggingConfigurationOutputReference <a name="ApsScraperScraperLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination">put_logging_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents">put_scraper_components</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination">reset_logging_destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents">reset_scraper_components</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_logging_destination` <a name="put_logging_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination"></a>

```python
def put_logging_destination(
  cloudwatch_logs: ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putLoggingDestination.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">ApsScraperScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

Represents a cloudwatch logs destination for scraper logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cloudwatch_logs ApsScraper#cloudwatch_logs}

---

##### `put_scraper_components` <a name="put_scraper_components" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents"></a>

```python
def put_scraper_components(
  value: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.putScraperComponents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]

---

##### `reset_logging_destination` <a name="reset_logging_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetLoggingDestination"></a>

```python
def reset_logging_destination() -> None
```

##### `reset_scraper_components` <a name="reset_scraper_components" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.resetScraperComponents"></a>

```python
def reset_scraper_components() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination">logging_destination</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents">scraper_components</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput">logging_destination_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput">scraper_components_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `logging_destination`<sup>Required</sup> <a name="logging_destination" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestination"></a>

```python
logging_destination: ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference">ApsScraperScraperLoggingConfigurationLoggingDestinationOutputReference</a>

---

##### `scraper_components`<sup>Required</sup> <a name="scraper_components" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponents"></a>

```python
scraper_components: ApsScraperScraperLoggingConfigurationScraperComponentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList">ApsScraperScraperLoggingConfigurationScraperComponentsList</a>

---

##### `logging_destination_input`<sup>Optional</sup> <a name="logging_destination_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.loggingDestinationInput"></a>

```python
logging_destination_input: IResolvable | ApsScraperScraperLoggingConfigurationLoggingDestination
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationLoggingDestination">ApsScraperScraperLoggingConfigurationLoggingDestination</a>

---

##### `scraper_components_input`<sup>Optional</sup> <a name="scraper_components_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.scraperComponentsInput"></a>

```python
scraper_components_input: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScraperLoggingConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfiguration">ApsScraperScraperLoggingConfiguration</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions">reset_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_options` <a name="reset_options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.resetOptions"></a>

```python
def reset_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput">options_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options">options</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `options_input`<sup>Optional</sup> <a name="options_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.optionsInput"></a>

```python
options_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.options"></a>

```python
options: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponentsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---


### ApsScraperScraperLoggingConfigurationScraperComponentsList <a name="ApsScraperScraperLoggingConfigurationScraperComponentsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApsScraperScraperLoggingConfigurationScraperComponents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>]

---


### ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference <a name="ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig">put_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig">reset_config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_config` <a name="put_config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig"></a>

```python
def put_config(
  options: typing.Mapping[str] = None
) -> None
```

###### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.putConfig.parameter.options"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#options ApsScraper#options}.

---

##### `reset_config` <a name="reset_config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetConfig"></a>

```python
def reset_config() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput">config_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.config"></a>

```python
config: ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference">ApsScraperScraperLoggingConfigurationScraperComponentsConfigOutputReference</a>

---

##### `config_input`<sup>Optional</sup> <a name="config_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.configInput"></a>

```python
config_input: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponentsConfig
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsConfig">ApsScraperScraperLoggingConfigurationScraperComponentsConfig</a>

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponentsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperScraperLoggingConfigurationScraperComponents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperScraperLoggingConfigurationScraperComponents">ApsScraperScraperLoggingConfigurationScraperComponents</a>

---


### ApsScraperSourceEksConfigurationOutputReference <a name="ApsScraperSourceEksConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSourceEksConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn">reset_cluster_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cluster_arn` <a name="reset_cluster_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetClusterArn"></a>

```python
def reset_cluster_arn() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput">cluster_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn">cluster_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_arn_input`<sup>Optional</sup> <a name="cluster_arn_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArnInput"></a>

```python
cluster_arn_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_arn`<sup>Required</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.clusterArn"></a>

```python
cluster_arn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperSourceEksConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---


### ApsScraperSourceOutputReference <a name="ApsScraperSourceOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration">put_eks_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration">put_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration">reset_eks_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration">reset_vpc_configuration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_eks_configuration` <a name="put_eks_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration"></a>

```python
def put_eks_configuration(
  cluster_arn: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `cluster_arn`<sup>Optional</sup> <a name="cluster_arn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration.parameter.clusterArn"></a>

- *Type:* str

ARN of an EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#cluster_arn ApsScraper#cluster_arn}

---

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putEksConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

##### `put_vpc_configuration` <a name="put_vpc_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration"></a>

```python
def put_vpc_configuration(
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None
) -> None
```

###### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

List of security group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#security_group_ids ApsScraper#security_group_ids}

---

###### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.putVpcConfiguration.parameter.subnetIds"></a>

- *Type:* typing.List[str]

List of subnet IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/aps_scraper#subnet_ids ApsScraper#subnet_ids}

---

##### `reset_eks_configuration` <a name="reset_eks_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetEksConfiguration"></a>

```python
def reset_eks_configuration() -> None
```

##### `reset_vpc_configuration` <a name="reset_vpc_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.resetVpcConfiguration"></a>

```python
def reset_vpc_configuration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration">eks_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration">vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput">eks_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput">vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eks_configuration`<sup>Required</sup> <a name="eks_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfiguration"></a>

```python
eks_configuration: ApsScraperSourceEksConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfigurationOutputReference">ApsScraperSourceEksConfigurationOutputReference</a>

---

##### `vpc_configuration`<sup>Required</sup> <a name="vpc_configuration" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfiguration"></a>

```python
vpc_configuration: ApsScraperSourceVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference">ApsScraperSourceVpcConfigurationOutputReference</a>

---

##### `eks_configuration_input`<sup>Optional</sup> <a name="eks_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.eksConfigurationInput"></a>

```python
eks_configuration_input: IResolvable | ApsScraperSourceEksConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceEksConfiguration">ApsScraperSourceEksConfiguration</a>

---

##### `vpc_configuration_input`<sup>Optional</sup> <a name="vpc_configuration_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.vpcConfigurationInput"></a>

```python
vpc_configuration_input: IResolvable | ApsScraperSourceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperSource
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSource">ApsScraperSource</a>

---


### ApsScraperSourceVpcConfigurationOutputReference <a name="ApsScraperSourceVpcConfigurationOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperSourceVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperSourceVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperSourceVpcConfiguration">ApsScraperSourceVpcConfiguration</a>

---


### ApsScraperTagsList <a name="ApsScraperTagsList" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApsScraperTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApsScraperTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>]

---


### ApsScraperTagsOutputReference <a name="ApsScraperTagsOutputReference" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import aps_scraper

apsScraper.ApsScraperTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apsScraper.ApsScraperTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApsScraperTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apsScraper.ApsScraperTags">ApsScraperTags</a>

---



