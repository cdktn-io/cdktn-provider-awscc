# `dataAwsccRoute53GlobalresolverFirewallRule` Submodule <a name="`dataAwsccRoute53GlobalresolverFirewallRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53GlobalresolverFirewallRule <a name="DataAwsccRoute53GlobalresolverFirewallRule" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53globalresolver_firewall_rule awscc_route53globalresolver_firewall_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule(scope: Construct, id: string, config: DataAwsccRoute53GlobalresolverFirewallRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig">DataAwsccRoute53GlobalresolverFirewallRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig">DataAwsccRoute53GlobalresolverFirewallRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53GlobalresolverFirewallRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53GlobalresolverFirewallRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53GlobalresolverFirewallRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53globalresolver_firewall_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53GlobalresolverFirewallRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDnsType">blockOverrideDnsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDomain">blockOverrideDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideTtl">blockOverrideTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockResponse">blockResponse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.clientToken">clientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.confidenceThreshold">confidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsAdvancedProtection">dnsAdvancedProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsViewId">dnsViewId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallDomainListId">firewallDomainListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallRuleId">firewallRuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.qType">qType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.queryType">queryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `blockOverrideDnsType`<sup>Required</sup> <a name="blockOverrideDnsType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDnsType"></a>

```typescript
public readonly blockOverrideDnsType: string;
```

- *Type:* string

---

##### `blockOverrideDomain`<sup>Required</sup> <a name="blockOverrideDomain" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideDomain"></a>

```typescript
public readonly blockOverrideDomain: string;
```

- *Type:* string

---

##### `blockOverrideTtl`<sup>Required</sup> <a name="blockOverrideTtl" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockOverrideTtl"></a>

```typescript
public readonly blockOverrideTtl: number;
```

- *Type:* number

---

##### `blockResponse`<sup>Required</sup> <a name="blockResponse" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.blockResponse"></a>

```typescript
public readonly blockResponse: string;
```

- *Type:* string

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.clientToken"></a>

```typescript
public readonly clientToken: string;
```

- *Type:* string

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.confidenceThreshold"></a>

```typescript
public readonly confidenceThreshold: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dnsAdvancedProtection`<sup>Required</sup> <a name="dnsAdvancedProtection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsAdvancedProtection"></a>

```typescript
public readonly dnsAdvancedProtection: string;
```

- *Type:* string

---

##### `dnsViewId`<sup>Required</sup> <a name="dnsViewId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.dnsViewId"></a>

```typescript
public readonly dnsViewId: string;
```

- *Type:* string

---

##### `firewallDomainListId`<sup>Required</sup> <a name="firewallDomainListId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallDomainListId"></a>

```typescript
public readonly firewallDomainListId: string;
```

- *Type:* string

---

##### `firewallRuleId`<sup>Required</sup> <a name="firewallRuleId" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.firewallRuleId"></a>

```typescript
public readonly firewallRuleId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `qType`<sup>Required</sup> <a name="qType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.qType"></a>

```typescript
public readonly qType: string;
```

- *Type:* string

---

##### `queryType`<sup>Required</sup> <a name="queryType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.queryType"></a>

```typescript
public readonly queryType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53GlobalresolverFirewallRuleConfig <a name="DataAwsccRoute53GlobalresolverFirewallRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53GlobalresolverFirewallRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53GlobalresolverFirewallRuleConfig: dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53GlobalresolverFirewallRule.DataAwsccRoute53GlobalresolverFirewallRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53globalresolver_firewall_rule#id DataAwsccRoute53GlobalresolverFirewallRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



