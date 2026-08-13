# `dataAwsccRoute53ResolverFirewallRuleGroupAssociation` Submodule <a name="`dataAwsccRoute53ResolverFirewallRuleGroupAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53ResolverFirewallRuleGroupAssociation <a name="DataAwsccRoute53ResolverFirewallRuleGroupAssociation" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_firewall_rule_group_association awscc_route53resolver_firewall_rule_group_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.NewDataAwsccRoute53ResolverFirewallRuleGroupAssociation(scope Construct, id *string, config DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig) DataAwsccRoute53ResolverFirewallRuleGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig">DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53ResolverFirewallRuleGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53ResolverFirewallRuleGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53ResolverFirewallRuleGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId">CreatorRequestId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId">FirewallRuleGroupAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId">FirewallRuleGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName">ManagedOwnerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime">ModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection">MutationProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList">DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `CreatorRequestId`<sup>Required</sup> <a name="CreatorRequestId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.creatorRequestId"></a>

```go
func CreatorRequestId() *string
```

- *Type:* *string

---

##### `FirewallRuleGroupAssociationId`<sup>Required</sup> <a name="FirewallRuleGroupAssociationId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupAssociationId"></a>

```go
func FirewallRuleGroupAssociationId() *string
```

- *Type:* *string

---

##### `FirewallRuleGroupId`<sup>Required</sup> <a name="FirewallRuleGroupId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.firewallRuleGroupId"></a>

```go
func FirewallRuleGroupId() *string
```

- *Type:* *string

---

##### `ManagedOwnerName`<sup>Required</sup> <a name="ManagedOwnerName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.managedOwnerName"></a>

```go
func ManagedOwnerName() *string
```

- *Type:* *string

---

##### `ModificationTime`<sup>Required</sup> <a name="ModificationTime" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.modificationTime"></a>

```go
func ModificationTime() *string
```

- *Type:* *string

---

##### `MutationProtection`<sup>Required</sup> <a name="MutationProtection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.mutationProtection"></a>

```go
func MutationProtection() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.tags"></a>

```go
func Tags() DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList">DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig <a name="DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

&dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53resolver_firewall_rule_group_association#id DataAwsccRoute53ResolverFirewallRuleGroupAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags <a name="DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

&dataawsccroute53resolverfirewallrulegroupassociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList <a name="DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.NewDataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference <a name="DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53resolverfirewallrulegroupassociation"

dataawsccroute53resolverfirewallrulegroupassociation.NewDataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags">DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53ResolverFirewallRuleGroupAssociation.DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags">DataAwsccRoute53ResolverFirewallRuleGroupAssociationTags</a>

---



