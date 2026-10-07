# `dataAwsccNetworksecuritymanagerRule` Submodule <a name="`dataAwsccNetworksecuritymanagerRule` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworksecuritymanagerRule <a name="DataAwsccNetworksecuritymanagerRule" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_rule awscc_networksecuritymanager_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule(scope: Construct, id: string, config: DataAwsccNetworksecuritymanagerRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig">DataAwsccNetworksecuritymanagerRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig">DataAwsccNetworksecuritymanagerRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isConstruct"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformElement"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccNetworksecuritymanagerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccNetworksecuritymanagerRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccNetworksecuritymanagerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworksecuritymanagerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleDescription">ruleDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleType">ruleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList">DataAwsccNetworksecuritymanagerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

---

##### `ruleDescription`<sup>Required</sup> <a name="ruleDescription" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleDescription"></a>

```typescript
public readonly ruleDescription: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.ruleType"></a>

```typescript
public readonly ruleType: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccNetworksecuritymanagerRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList">DataAwsccNetworksecuritymanagerRuleTagsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworksecuritymanagerRuleConfig <a name="DataAwsccNetworksecuritymanagerRuleConfig" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerRuleConfig: dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/data-sources/networksecuritymanager_rule#id DataAwsccNetworksecuritymanagerRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworksecuritymanagerRuleTags <a name="DataAwsccNetworksecuritymanagerRuleTags" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTags.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

const dataAwsccNetworksecuritymanagerRuleTags: dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworksecuritymanagerRuleTagsList <a name="DataAwsccNetworksecuritymanagerRuleTagsList" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccNetworksecuritymanagerRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccNetworksecuritymanagerRuleTagsOutputReference <a name="DataAwsccNetworksecuritymanagerRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccNetworksecuritymanagerRule } from '@cdktn/provider-awscc'

new dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTags">DataAwsccNetworksecuritymanagerRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccNetworksecuritymanagerRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworksecuritymanagerRule.DataAwsccNetworksecuritymanagerRuleTags">DataAwsccNetworksecuritymanagerRuleTags</a>

---



