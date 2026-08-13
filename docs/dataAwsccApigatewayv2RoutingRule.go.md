# `dataAwsccApigatewayv2RoutingRule` Submodule <a name="`dataAwsccApigatewayv2RoutingRule` Submodule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccApigatewayv2RoutingRule <a name="DataAwsccApigatewayv2RoutingRule" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_routing_rule awscc_apigatewayv2_routing_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRule(scope Construct, id *string, config DataAwsccApigatewayv2RoutingRuleConfig) DataAwsccApigatewayv2RoutingRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig">DataAwsccApigatewayv2RoutingRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig">DataAwsccApigatewayv2RoutingRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccApigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRule_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccApigatewayv2RoutingRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccApigatewayv2RoutingRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccApigatewayv2RoutingRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_routing_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccApigatewayv2RoutingRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList">DataAwsccApigatewayv2RoutingRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList">DataAwsccApigatewayv2RoutingRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.domainNameArn">DomainNameArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleArn">RoutingRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleId">RoutingRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.actions"></a>

```go
func Actions() DataAwsccApigatewayv2RoutingRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList">DataAwsccApigatewayv2RoutingRuleActionsList</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.conditions"></a>

```go
func Conditions() DataAwsccApigatewayv2RoutingRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList">DataAwsccApigatewayv2RoutingRuleConditionsList</a>

---

##### `DomainNameArn`<sup>Required</sup> <a name="DomainNameArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.domainNameArn"></a>

```go
func DomainNameArn() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `RoutingRuleArn`<sup>Required</sup> <a name="RoutingRuleArn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleArn"></a>

```go
func RoutingRuleArn() *string
```

- *Type:* *string

---

##### `RoutingRuleId`<sup>Required</sup> <a name="RoutingRuleId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.routingRuleId"></a>

```go
func RoutingRuleId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccApigatewayv2RoutingRuleActions <a name="DataAwsccApigatewayv2RoutingRuleActions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleActions {

}
```


### DataAwsccApigatewayv2RoutingRuleActionsInvokeApi <a name="DataAwsccApigatewayv2RoutingRuleActionsInvokeApi" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi {

}
```


### DataAwsccApigatewayv2RoutingRuleConditions <a name="DataAwsccApigatewayv2RoutingRuleConditions" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleConditions {

}
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths {

}
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders {

}
```


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf {

}
```


### DataAwsccApigatewayv2RoutingRuleConfig <a name="DataAwsccApigatewayv2RoutingRuleConfig" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

&dataawsccapigatewayv2routingrule.DataAwsccApigatewayv2RoutingRuleConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/apigatewayv2_routing_rule#id DataAwsccApigatewayv2RoutingRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference <a name="DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId">ApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath">StripBasePath</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi">DataAwsccApigatewayv2RoutingRuleActionsInvokeApi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.apiId"></a>

```go
func ApiId() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `StripBasePath`<sup>Required</sup> <a name="StripBasePath" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.stripBasePath"></a>

```go
func StripBasePath() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleActionsInvokeApi
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApi">DataAwsccApigatewayv2RoutingRuleActionsInvokeApi</a>

---


### DataAwsccApigatewayv2RoutingRuleActionsList <a name="DataAwsccApigatewayv2RoutingRuleActionsList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayv2RoutingRuleActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayv2RoutingRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayv2RoutingRuleActionsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayv2RoutingRuleActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.invokeApi">InvokeApi</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference">DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions">DataAwsccApigatewayv2RoutingRuleActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InvokeApi`<sup>Required</sup> <a name="InvokeApi" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.invokeApi"></a>

```go
func InvokeApi() DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference">DataAwsccApigatewayv2RoutingRuleActionsInvokeApiOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleActions">DataAwsccApigatewayv2RoutingRuleActions</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsList <a name="DataAwsccApigatewayv2RoutingRuleConditionsList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayv2RoutingRuleConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayv2RoutingRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf">AnyOf</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.anyOf"></a>

```go
func AnyOf() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePaths</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get"></a>

```go
func Get(index *f64) DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob">ValueGlob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `ValueGlob`<sup>Required</sup> <a name="ValueGlob" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.valueGlob"></a>

```go
func ValueGlob() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOf</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf">AnyOf</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnyOf`<sup>Required</sup> <a name="AnyOf" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.anyOf"></a>

```go
func AnyOf() DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersAnyOfList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeaders</a>

---


### DataAwsccApigatewayv2RoutingRuleConditionsOutputReference <a name="DataAwsccApigatewayv2RoutingRuleConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccapigatewayv2routingrule"

dataawsccapigatewayv2routingrule.NewDataAwsccApigatewayv2RoutingRuleConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccApigatewayv2RoutingRuleConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths">MatchBasePaths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders">MatchHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions">DataAwsccApigatewayv2RoutingRuleConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchBasePaths`<sup>Required</sup> <a name="MatchBasePaths" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchBasePaths"></a>

```go
func MatchBasePaths() DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchBasePathsOutputReference</a>

---

##### `MatchHeaders`<sup>Required</sup> <a name="MatchHeaders" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.matchHeaders"></a>

```go
func MatchHeaders() DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference">DataAwsccApigatewayv2RoutingRuleConditionsMatchHeadersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccApigatewayv2RoutingRuleConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccApigatewayv2RoutingRule.DataAwsccApigatewayv2RoutingRuleConditions">DataAwsccApigatewayv2RoutingRuleConditions</a>

---



