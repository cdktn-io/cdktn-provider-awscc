# `dataAwsccEventsRule` Submodule <a name="`dataAwsccEventsRule` Submodule" id="@cdktn/provider-awscc.dataAwsccEventsRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEventsRule <a name="DataAwsccEventsRule" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/events_rule awscc_events_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRule(scope: Construct, id: string, config: DataAwsccEventsRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig">DataAwsccEventsRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig">DataAwsccEventsRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

dataAwsccEventsRule.DataAwsccEventsRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccEventsRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEventsRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEventsRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/events_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEventsRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName">eventBusName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern">eventPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.ruleName">ruleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression">scheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `eventBusName`<sup>Required</sup> <a name="eventBusName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventBusName"></a>

```typescript
public readonly eventBusName: string;
```

- *Type:* string

---

##### `eventPattern`<sup>Required</sup> <a name="eventPattern" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.eventPattern"></a>

```typescript
public readonly eventPattern: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

---

##### `scheduleExpression`<sup>Required</sup> <a name="scheduleExpression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.scheduleExpression"></a>

```typescript
public readonly scheduleExpression: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccEventsRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList">DataAwsccEventsRuleTagsList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.targets"></a>

```typescript
public readonly targets: DataAwsccEventsRuleTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList">DataAwsccEventsRuleTargetsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEventsRuleConfig <a name="DataAwsccEventsRuleConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleConfig: dataAwsccEventsRule.DataAwsccEventsRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/events_rule#id DataAwsccEventsRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEventsRuleTags <a name="DataAwsccEventsRuleTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTags: dataAwsccEventsRule.DataAwsccEventsRuleTags = { ... }
```


### DataAwsccEventsRuleTargets <a name="DataAwsccEventsRuleTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargets: dataAwsccEventsRule.DataAwsccEventsRuleTargets = { ... }
```


### DataAwsccEventsRuleTargetsAppSyncParameters <a name="DataAwsccEventsRuleTargetsAppSyncParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsAppSyncParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters = { ... }
```


### DataAwsccEventsRuleTargetsBatchParameters <a name="DataAwsccEventsRuleTargetsBatchParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsBatchParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters = { ... }
```


### DataAwsccEventsRuleTargetsBatchParametersArrayProperties <a name="DataAwsccEventsRuleTargetsBatchParametersArrayProperties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsBatchParametersArrayProperties: dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties = { ... }
```


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategy <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsBatchParametersRetryStrategy: dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy = { ... }
```


### DataAwsccEventsRuleTargetsDeadLetterConfig <a name="DataAwsccEventsRuleTargetsDeadLetterConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsDeadLetterConfig: dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig = { ... }
```


### DataAwsccEventsRuleTargetsEcsParameters <a name="DataAwsccEventsRuleTargetsEcsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersPlacementConstraints: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersPlacementStrategies: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies = { ... }
```


### DataAwsccEventsRuleTargetsEcsParametersTagListStruct <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsEcsParametersTagListStruct: dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct = { ... }
```


### DataAwsccEventsRuleTargetsHttpParameters <a name="DataAwsccEventsRuleTargetsHttpParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsHttpParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters = { ... }
```


### DataAwsccEventsRuleTargetsInputTransformer <a name="DataAwsccEventsRuleTargetsInputTransformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsInputTransformer: dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer = { ... }
```


### DataAwsccEventsRuleTargetsKinesisParameters <a name="DataAwsccEventsRuleTargetsKinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsKinesisParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters = { ... }
```


### DataAwsccEventsRuleTargetsRedshiftDataParameters <a name="DataAwsccEventsRuleTargetsRedshiftDataParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsRedshiftDataParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters = { ... }
```


### DataAwsccEventsRuleTargetsRetryPolicy <a name="DataAwsccEventsRuleTargetsRetryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsRetryPolicy: dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy = { ... }
```


### DataAwsccEventsRuleTargetsRunCommandParameters <a name="DataAwsccEventsRuleTargetsRunCommandParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsRunCommandParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters = { ... }
```


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets: dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets = { ... }
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParameters <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsSageMakerPipelineParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters = { ... }
```


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct: dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct = { ... }
```


### DataAwsccEventsRuleTargetsSqsParameters <a name="DataAwsccEventsRuleTargetsSqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

const dataAwsccEventsRuleTargetsSqsParameters: dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEventsRuleTagsList <a name="DataAwsccEventsRuleTagsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTagsOutputReference <a name="DataAwsccEventsRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTags">DataAwsccEventsRuleTags</a>

---


### DataAwsccEventsRuleTargetsAppSyncParametersOutputReference <a name="DataAwsccEventsRuleTargetsAppSyncParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation">graphQlOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `graphQlOperation`<sup>Required</sup> <a name="graphQlOperation" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.graphQlOperation"></a>

```typescript
public readonly graphQlOperation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsAppSyncParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParameters">DataAwsccEventsRuleTargetsAppSyncParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsBatchParametersArrayProperties;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayProperties">DataAwsccEventsRuleTargetsBatchParametersArrayProperties</a>

---


### DataAwsccEventsRuleTargetsBatchParametersOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties">arrayProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition">jobDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy">retryStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arrayProperties`<sup>Required</sup> <a name="arrayProperties" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.arrayProperties"></a>

```typescript
public readonly arrayProperties: DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference">DataAwsccEventsRuleTargetsBatchParametersArrayPropertiesOutputReference</a>

---

##### `jobDefinition`<sup>Required</sup> <a name="jobDefinition" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobDefinition"></a>

```typescript
public readonly jobDefinition: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `retryStrategy`<sup>Required</sup> <a name="retryStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.retryStrategy"></a>

```typescript
public readonly retryStrategy: DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference">DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsBatchParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParameters">DataAwsccEventsRuleTargetsBatchParameters</a>

---


### DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference <a name="DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts">attempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attempts`<sup>Required</sup> <a name="attempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.attempts"></a>

```typescript
public readonly attempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsBatchParametersRetryStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersRetryStrategy">DataAwsccEventsRuleTargetsBatchParametersRetryStrategy</a>

---


### DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference <a name="DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsDeadLetterConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfig">DataAwsccEventsRuleTargetsDeadLetterConfig</a>

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base">base</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider">capacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `base`<sup>Required</sup> <a name="base" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.base"></a>

```typescript
public readonly base: number;
```

- *Type:* number

---

##### `capacityProvider`<sup>Required</sup> <a name="capacityProvider" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```typescript
public readonly capacityProvider: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategy</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```typescript
public readonly assignPublicIp: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration">awsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsVpcConfiguration`<sup>Required</sup> <a name="awsVpcConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```typescript
public readonly awsVpcConfiguration: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration">DataAwsccEventsRuleTargetsEcsParametersNetworkConfiguration</a>

---


### DataAwsccEventsRuleTargetsEcsParametersOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy">capacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags">enableEcsManagedTags</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand">enableExecuteCommand</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group">group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType">launchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration">networkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints">placementConstraints</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies">placementStrategies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion">platformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags">propagateTags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId">referenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList">tagList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn">taskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `capacityProviderStrategy`<sup>Required</sup> <a name="capacityProviderStrategy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.capacityProviderStrategy"></a>

```typescript
public readonly capacityProviderStrategy: DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList">DataAwsccEventsRuleTargetsEcsParametersCapacityProviderStrategyList</a>

---

##### `enableEcsManagedTags`<sup>Required</sup> <a name="enableEcsManagedTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableEcsManagedTags"></a>

```typescript
public readonly enableEcsManagedTags: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `enableExecuteCommand`<sup>Required</sup> <a name="enableExecuteCommand" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.enableExecuteCommand"></a>

```typescript
public readonly enableExecuteCommand: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.group"></a>

```typescript
public readonly group: string;
```

- *Type:* string

---

##### `launchType`<sup>Required</sup> <a name="launchType" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.launchType"></a>

```typescript
public readonly launchType: string;
```

- *Type:* string

---

##### `networkConfiguration`<sup>Required</sup> <a name="networkConfiguration" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference">DataAwsccEventsRuleTargetsEcsParametersNetworkConfigurationOutputReference</a>

---

##### `placementConstraints`<sup>Required</sup> <a name="placementConstraints" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementConstraints"></a>

```typescript
public readonly placementConstraints: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList</a>

---

##### `placementStrategies`<sup>Required</sup> <a name="placementStrategies" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.placementStrategies"></a>

```typescript
public readonly placementStrategies: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList</a>

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.platformVersion"></a>

```typescript
public readonly platformVersion: string;
```

- *Type:* string

---

##### `propagateTags`<sup>Required</sup> <a name="propagateTags" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.propagateTags"></a>

```typescript
public readonly propagateTags: string;
```

- *Type:* string

---

##### `referenceId`<sup>Required</sup> <a name="referenceId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.referenceId"></a>

```typescript
public readonly referenceId: string;
```

- *Type:* string

---

##### `tagList`<sup>Required</sup> <a name="tagList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.tagList"></a>

```typescript
public readonly tagList: DataAwsccEventsRuleTargetsEcsParametersTagListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList">DataAwsccEventsRuleTargetsEcsParametersTagListStructList</a>

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `taskDefinitionArn`<sup>Required</sup> <a name="taskDefinitionArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.taskDefinitionArn"></a>

```typescript
public readonly taskDefinitionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParameters">DataAwsccEventsRuleTargetsEcsParameters</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraintsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints">DataAwsccEventsRuleTargetsEcsParametersPlacementConstraints</a>

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies">DataAwsccEventsRuleTargetsEcsParametersPlacementStrategies</a>

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructList <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference <a name="DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsEcsParametersTagListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersTagListStruct">DataAwsccEventsRuleTargetsEcsParametersTagListStruct</a>

---


### DataAwsccEventsRuleTargetsHttpParametersOutputReference <a name="DataAwsccEventsRuleTargetsHttpParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters">headerParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues">pathParameterValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters">queryStringParameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerParameters`<sup>Required</sup> <a name="headerParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.headerParameters"></a>

```typescript
public readonly headerParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `pathParameterValues`<sup>Required</sup> <a name="pathParameterValues" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.pathParameterValues"></a>

```typescript
public readonly pathParameterValues: string[];
```

- *Type:* string[]

---

##### `queryStringParameters`<sup>Required</sup> <a name="queryStringParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.queryStringParameters"></a>

```typescript
public readonly queryStringParameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsHttpParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParameters">DataAwsccEventsRuleTargetsHttpParameters</a>

---


### DataAwsccEventsRuleTargetsInputTransformerOutputReference <a name="DataAwsccEventsRuleTargetsInputTransformerOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap">inputPathsMap</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate">inputTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputPathsMap`<sup>Required</sup> <a name="inputPathsMap" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputPathsMap"></a>

```typescript
public readonly inputPathsMap: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `inputTemplate`<sup>Required</sup> <a name="inputTemplate" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.inputTemplate"></a>

```typescript
public readonly inputTemplate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsInputTransformer;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformer">DataAwsccEventsRuleTargetsInputTransformer</a>

---


### DataAwsccEventsRuleTargetsKinesisParametersOutputReference <a name="DataAwsccEventsRuleTargetsKinesisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath">partitionKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyPath`<sup>Required</sup> <a name="partitionKeyPath" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.partitionKeyPath"></a>

```typescript
public readonly partitionKeyPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsKinesisParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParameters">DataAwsccEventsRuleTargetsKinesisParameters</a>

---


### DataAwsccEventsRuleTargetsList <a name="DataAwsccEventsRuleTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsOutputReference <a name="DataAwsccEventsRuleTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters">appSyncParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters">batchParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig">deadLetterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters">ecsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters">httpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath">inputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer">inputTransformer</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters">kinesisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters">redshiftDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy">retryPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters">runCommandParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters">sageMakerPipelineParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters">sqsParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSyncParameters`<sup>Required</sup> <a name="appSyncParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.appSyncParameters"></a>

```typescript
public readonly appSyncParameters: DataAwsccEventsRuleTargetsAppSyncParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsAppSyncParametersOutputReference">DataAwsccEventsRuleTargetsAppSyncParametersOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `batchParameters`<sup>Required</sup> <a name="batchParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.batchParameters"></a>

```typescript
public readonly batchParameters: DataAwsccEventsRuleTargetsBatchParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsBatchParametersOutputReference">DataAwsccEventsRuleTargetsBatchParametersOutputReference</a>

---

##### `deadLetterConfig`<sup>Required</sup> <a name="deadLetterConfig" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.deadLetterConfig"></a>

```typescript
public readonly deadLetterConfig: DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference">DataAwsccEventsRuleTargetsDeadLetterConfigOutputReference</a>

---

##### `ecsParameters`<sup>Required</sup> <a name="ecsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.ecsParameters"></a>

```typescript
public readonly ecsParameters: DataAwsccEventsRuleTargetsEcsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsEcsParametersOutputReference">DataAwsccEventsRuleTargetsEcsParametersOutputReference</a>

---

##### `httpParameters`<sup>Required</sup> <a name="httpParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.httpParameters"></a>

```typescript
public readonly httpParameters: DataAwsccEventsRuleTargetsHttpParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsHttpParametersOutputReference">DataAwsccEventsRuleTargetsHttpParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `inputPath`<sup>Required</sup> <a name="inputPath" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputPath"></a>

```typescript
public readonly inputPath: string;
```

- *Type:* string

---

##### `inputTransformer`<sup>Required</sup> <a name="inputTransformer" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.inputTransformer"></a>

```typescript
public readonly inputTransformer: DataAwsccEventsRuleTargetsInputTransformerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsInputTransformerOutputReference">DataAwsccEventsRuleTargetsInputTransformerOutputReference</a>

---

##### `kinesisParameters`<sup>Required</sup> <a name="kinesisParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.kinesisParameters"></a>

```typescript
public readonly kinesisParameters: DataAwsccEventsRuleTargetsKinesisParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsKinesisParametersOutputReference">DataAwsccEventsRuleTargetsKinesisParametersOutputReference</a>

---

##### `redshiftDataParameters`<sup>Required</sup> <a name="redshiftDataParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.redshiftDataParameters"></a>

```typescript
public readonly redshiftDataParameters: DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference">DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference</a>

---

##### `retryPolicy`<sup>Required</sup> <a name="retryPolicy" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.retryPolicy"></a>

```typescript
public readonly retryPolicy: DataAwsccEventsRuleTargetsRetryPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference">DataAwsccEventsRuleTargetsRetryPolicyOutputReference</a>

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `runCommandParameters`<sup>Required</sup> <a name="runCommandParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.runCommandParameters"></a>

```typescript
public readonly runCommandParameters: DataAwsccEventsRuleTargetsRunCommandParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference">DataAwsccEventsRuleTargetsRunCommandParametersOutputReference</a>

---

##### `sageMakerPipelineParameters`<sup>Required</sup> <a name="sageMakerPipelineParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sageMakerPipelineParameters"></a>

```typescript
public readonly sageMakerPipelineParameters: DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference">DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference</a>

---

##### `sqsParameters`<sup>Required</sup> <a name="sqsParameters" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.sqsParameters"></a>

```typescript
public readonly sqsParameters: DataAwsccEventsRuleTargetsSqsParametersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference">DataAwsccEventsRuleTargetsSqsParametersOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargets">DataAwsccEventsRuleTargets</a>

---


### DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference <a name="DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser">dbUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn">secretManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls">sqls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName">statementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent">withEvent</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dbUser`<sup>Required</sup> <a name="dbUser" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.dbUser"></a>

```typescript
public readonly dbUser: string;
```

- *Type:* string

---

##### `secretManagerArn`<sup>Required</sup> <a name="secretManagerArn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.secretManagerArn"></a>

```typescript
public readonly secretManagerArn: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `sqls`<sup>Required</sup> <a name="sqls" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.sqls"></a>

```typescript
public readonly sqls: string[];
```

- *Type:* string[]

---

##### `statementName`<sup>Required</sup> <a name="statementName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.statementName"></a>

```typescript
public readonly statementName: string;
```

- *Type:* string

---

##### `withEvent`<sup>Required</sup> <a name="withEvent" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.withEvent"></a>

```typescript
public readonly withEvent: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsRedshiftDataParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRedshiftDataParameters">DataAwsccEventsRuleTargetsRedshiftDataParameters</a>

---


### DataAwsccEventsRuleTargetsRetryPolicyOutputReference <a name="DataAwsccEventsRuleTargetsRetryPolicyOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds">maximumEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts">maximumRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumEventAgeInSeconds`<sup>Required</sup> <a name="maximumEventAgeInSeconds" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumEventAgeInSeconds"></a>

```typescript
public readonly maximumEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maximumRetryAttempts`<sup>Required</sup> <a name="maximumRetryAttempts" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.maximumRetryAttempts"></a>

```typescript
public readonly maximumRetryAttempts: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsRetryPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRetryPolicy">DataAwsccEventsRuleTargetsRetryPolicy</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets">runCommandTargets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `runCommandTargets`<sup>Required</sup> <a name="runCommandTargets" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.runCommandTargets"></a>

```typescript
public readonly runCommandTargets: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsRunCommandParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParameters">DataAwsccEventsRuleTargetsRunCommandParameters</a>

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference <a name="DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets">DataAwsccEventsRuleTargetsRunCommandParametersRunCommandTargets</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList">pipelineParameterList</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pipelineParameterList`<sup>Required</sup> <a name="pipelineParameterList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.pipelineParameterList"></a>

```typescript
public readonly pipelineParameterList: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsSageMakerPipelineParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParameters">DataAwsccEventsRuleTargetsSageMakerPipelineParameters</a>

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get"></a>

```typescript
public get(index: number): DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference <a name="DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct">DataAwsccEventsRuleTargetsSageMakerPipelineParametersPipelineParameterListStruct</a>

---


### DataAwsccEventsRuleTargetsSqsParametersOutputReference <a name="DataAwsccEventsRuleTargetsSqsParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccEventsRule } from '@cdktn/provider-awscc'

new dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId">messageGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageGroupId`<sup>Required</sup> <a name="messageGroupId" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.messageGroupId"></a>

```typescript
public readonly messageGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccEventsRuleTargetsSqsParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEventsRule.DataAwsccEventsRuleTargetsSqsParameters">DataAwsccEventsRuleTargetsSqsParameters</a>

---



