# `dataAwsccRoute53GlobalresolverFirewallRule` Submodule <a name="`dataAwsccRoute53GlobalresolverFirewallRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverFirewallRule <a name="DataAwsccRoute53GlobalresolverFirewallRule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

dataawsccroute53globalresolverfirewallrule.NewDataAwsccRoute53GlobalresolverFirewallRule(scope Construct, id *string, config DataAwsccRoute53GlobalresolverFirewallRuleConfig) DataAwsccRoute53GlobalresolverFirewallRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig">DataAwsccRoute53GlobalresolverFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig">DataAwsccRoute53GlobalresolverFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

dataawsccroute53globalresolverfirewallrule.DataAwsccRoute53GlobalresolverFirewallRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

dataawsccroute53globalresolverfirewallrule.DataAwsccRoute53GlobalresolverFirewallRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

dataawsccroute53globalresolverfirewallrule.DataAwsccRoute53GlobalresolverFirewallRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

dataawsccroute53globalresolverfirewallrule.DataAwsccRoute53GlobalresolverFirewallRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53GlobalresolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDnsType">BlockOverrideDnsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDomain">BlockOverrideDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideTtl">BlockOverrideTtl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockResponse">BlockResponse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsAdvancedProtection">DnsAdvancedProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsViewId">DnsViewId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallDomainListId">FirewallDomainListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallRuleId">FirewallRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.qType">QType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.queryType">QueryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `BlockOverrideDnsType`<sup>Required</sup> <a name="BlockOverrideDnsType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDnsType"></a>

```go
func BlockOverrideDnsType() *string
```

- *Type:* *string

---

##### `BlockOverrideDomain`<sup>Required</sup> <a name="BlockOverrideDomain" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDomain"></a>

```go
func BlockOverrideDomain() *string
```

- *Type:* *string

---

##### `BlockOverrideTtl`<sup>Required</sup> <a name="BlockOverrideTtl" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideTtl"></a>

```go
func BlockOverrideTtl() *f64
```

- *Type:* *f64

---

##### `BlockResponse`<sup>Required</sup> <a name="BlockResponse" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockResponse"></a>

```go
func BlockResponse() *string
```

- *Type:* *string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.confidenceThreshold"></a>

```go
func ConfidenceThreshold() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsAdvancedProtection`<sup>Required</sup> <a name="DnsAdvancedProtection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsAdvancedProtection"></a>

```go
func DnsAdvancedProtection() *string
```

- *Type:* *string

---

##### `DnsViewId`<sup>Required</sup> <a name="DnsViewId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsViewId"></a>

```go
func DnsViewId() *string
```

- *Type:* *string

---

##### `FirewallDomainListId`<sup>Required</sup> <a name="FirewallDomainListId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallDomainListId"></a>

```go
func FirewallDomainListId() *string
```

- *Type:* *string

---

##### `FirewallRuleId`<sup>Required</sup> <a name="FirewallRuleId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallRuleId"></a>

```go
func FirewallRuleId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `QType`<sup>Required</sup> <a name="QType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.qType"></a>

```go
func QType() *string
```

- *Type:* *string

---

##### `QueryType`<sup>Required</sup> <a name="QueryType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.queryType"></a>

```go
func QueryType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverFirewallRuleConfig <a name="DataAwsccRoute53GlobalresolverFirewallRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53globalresolverfirewallrule"

&dataawsccroute53globalresolverfirewallrule.DataAwsccRoute53GlobalresolverFirewallRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/route53globalresolver_firewall_rule#id DataAwsccRoute53GlobalresolverFirewallRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



