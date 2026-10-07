# `dataAwsccConfigOrganizationConfigRule` Submodule <a name="`dataAwsccConfigOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccConfigOrganizationConfigRule <a name="DataAwsccConfigOrganizationConfigRule" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.NewDataAwsccConfigOrganizationConfigRule(scope Construct, id *string, config DataAwsccConfigOrganizationConfigRuleConfig) DataAwsccConfigOrganizationConfigRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig">DataAwsccConfigOrganizationConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig">DataAwsccConfigOrganizationConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccConfigOrganizationConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn">OrganizationConfigRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName">OrganizationConfigRuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">OrganizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">OrganizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">OrganizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.excludedAccounts"></a>

```go
func ExcludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationConfigRuleArn`<sup>Required</sup> <a name="OrganizationConfigRuleArn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```go
func OrganizationConfigRuleArn() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleName`<sup>Required</sup> <a name="OrganizationConfigRuleName" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```go
func OrganizationConfigRuleName() *string
```

- *Type:* *string

---

##### `OrganizationCustomPolicyRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```go
func OrganizationCustomPolicyRuleMetadata() DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `OrganizationCustomRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```go
func OrganizationCustomRuleMetadata() DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `OrganizationManagedRuleMetadata`<sup>Required</sup> <a name="OrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```go
func OrganizationManagedRuleMetadata() DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccConfigOrganizationConfigRuleConfig <a name="DataAwsccConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

&dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/config_organization_config_rule#id DataAwsccConfigOrganizationConfigRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

&dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {

}
```


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

&dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {

}
```


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

&dataawsccconfigorganizationconfigrule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.NewDataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">PolicyText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DebugLogDeliveryAccounts`<sup>Required</sup> <a name="DebugLogDeliveryAccounts" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```go
func DebugLogDeliveryAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```go
func OrganizationConfigRuleTriggerTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```go
func PolicyText() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.NewDataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```go
func LambdaFunctionArn() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```go
func OrganizationConfigRuleTriggerTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---


### DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccconfigorganizationconfigrule"

dataawsccconfigorganizationconfigrule.NewDataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">RuleIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```go
func RuleIdentifier() *string
```

- *Type:* *string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccConfigOrganizationConfigRule.DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">DataAwsccConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---



