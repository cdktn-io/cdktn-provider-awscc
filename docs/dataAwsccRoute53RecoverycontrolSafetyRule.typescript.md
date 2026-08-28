# `dataAwsccRoute53RecoverycontrolSafetyRule` Submodule <a name="`dataAwsccRoute53RecoverycontrolSafetyRule` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRule <a name="DataAwsccRoute53RecoverycontrolSafetyRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule awscc_route53recoverycontrol_safety_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule(scope: Construct, id: string, config: DataAwsccRoute53RecoverycontrolSafetyRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccRoute53RecoverycontrolSafetyRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccRoute53RecoverycontrolSafetyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccRoute53RecoverycontrolSafetyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoverycontrolSafetyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule">assertionRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn">controlPanelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule">gatingRule</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig">ruleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn">safetyRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `assertionRule`<sup>Required</sup> <a name="assertionRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.assertionRule"></a>

```typescript
public readonly assertionRule: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference</a>

---

##### `controlPanelArn`<sup>Required</sup> <a name="controlPanelArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.controlPanelArn"></a>

```typescript
public readonly controlPanelArn: string;
```

- *Type:* string

---

##### `gatingRule`<sup>Required</sup> <a name="gatingRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.gatingRule"></a>

```typescript
public readonly gatingRule: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ruleConfig`<sup>Required</sup> <a name="ruleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.ruleConfig"></a>

```typescript
public readonly ruleConfig: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference</a>

---

##### `safetyRuleArn`<sup>Required</sup> <a name="safetyRuleArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.safetyRuleArn"></a>

```typescript
public readonly safetyRuleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tags"></a>

```typescript
public readonly tags: DataAwsccRoute53RecoverycontrolSafetyRuleTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList">DataAwsccRoute53RecoverycontrolSafetyRuleTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule: dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule = { ... }
```


### DataAwsccRoute53RecoverycontrolSafetyRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoverycontrolSafetyRuleConfig: dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/route53recoverycontrol_safety_rule#id DataAwsccRoute53RecoverycontrolSafetyRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoverycontrolSafetyRuleGatingRule: dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule = { ... }
```


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig: dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig = { ... }
```


### DataAwsccRoute53RecoverycontrolSafetyRuleTags <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

const dataAwsccRoute53RecoverycontrolSafetyRuleTags: dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls">assertedControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `assertedControls`<sup>Required</sup> <a name="assertedControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.assertedControls"></a>

```typescript
public readonly assertedControls: string[];
```

- *Type:* string[]

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule">DataAwsccRoute53RecoverycontrolSafetyRuleAssertionRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls">gatingControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls">targetControls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs">waitPeriodMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatingControls`<sup>Required</sup> <a name="gatingControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.gatingControls"></a>

```typescript
public readonly gatingControls: string[];
```

- *Type:* string[]

---

##### `targetControls`<sup>Required</sup> <a name="targetControls" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.targetControls"></a>

```typescript
public readonly targetControls: string[];
```

- *Type:* string[]

---

##### `waitPeriodMs`<sup>Required</sup> <a name="waitPeriodMs" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.waitPeriodMs"></a>

```typescript
public readonly waitPeriodMs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule">DataAwsccRoute53RecoverycontrolSafetyRuleGatingRule</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted">inverted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inverted`<sup>Required</sup> <a name="inverted" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.inverted"></a>

```typescript
public readonly inverted: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig">DataAwsccRoute53RecoverycontrolSafetyRuleRuleConfig</a>

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsList <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get"></a>

```typescript
public get(index: number): DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference <a name="DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccRoute53RecoverycontrolSafetyRule } from '@cdktn/provider-awscc'

new dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccRoute53RecoverycontrolSafetyRuleTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoverycontrolSafetyRule.DataAwsccRoute53RecoverycontrolSafetyRuleTags">DataAwsccRoute53RecoverycontrolSafetyRuleTags</a>

---



