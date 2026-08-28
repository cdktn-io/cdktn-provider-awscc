# `dataAwsccCodestarnotificationsNotificationRule` Submodule <a name="`dataAwsccCodestarnotificationsNotificationRule` Submodule" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCodestarnotificationsNotificationRule <a name="DataAwsccCodestarnotificationsNotificationRule" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarnotifications_notification_rule awscc_codestarnotifications_notification_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

new dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule(scope: Construct, id: string, config: DataAwsccCodestarnotificationsNotificationRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig">DataAwsccCodestarnotificationsNotificationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig">DataAwsccCodestarnotificationsNotificationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCodestarnotificationsNotificationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCodestarnotificationsNotificationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCodestarnotificationsNotificationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarnotifications_notification_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCodestarnotificationsNotificationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.detailType">detailType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeId">eventTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeIds">eventTypeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targetAddress">targetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList">DataAwsccCodestarnotificationsNotificationRuleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `detailType`<sup>Required</sup> <a name="detailType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.detailType"></a>

```typescript
public readonly detailType: string;
```

- *Type:* string

---

##### `eventTypeId`<sup>Required</sup> <a name="eventTypeId" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeId"></a>

```typescript
public readonly eventTypeId: string;
```

- *Type:* string

---

##### `eventTypeIds`<sup>Required</sup> <a name="eventTypeIds" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.eventTypeIds"></a>

```typescript
public readonly eventTypeIds: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targetAddress`<sup>Required</sup> <a name="targetAddress" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targetAddress"></a>

```typescript
public readonly targetAddress: string;
```

- *Type:* string

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.targets"></a>

```typescript
public readonly targets: DataAwsccCodestarnotificationsNotificationRuleTargetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList">DataAwsccCodestarnotificationsNotificationRuleTargetsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCodestarnotificationsNotificationRuleConfig <a name="DataAwsccCodestarnotificationsNotificationRuleConfig" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.Initializer"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

const dataAwsccCodestarnotificationsNotificationRuleConfig: dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/codestarnotifications_notification_rule#id DataAwsccCodestarnotificationsNotificationRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCodestarnotificationsNotificationRuleTargets <a name="DataAwsccCodestarnotificationsNotificationRuleTargets" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets.Initializer"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

const dataAwsccCodestarnotificationsNotificationRuleTargets: dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCodestarnotificationsNotificationRuleTargetsList <a name="DataAwsccCodestarnotificationsNotificationRuleTargetsList" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

new dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get"></a>

```typescript
public get(index: number): DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference <a name="DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCodestarnotificationsNotificationRule } from '@cdktn/provider-awscc'

new dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress">targetAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets">DataAwsccCodestarnotificationsNotificationRuleTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetAddress`<sup>Required</sup> <a name="targetAddress" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetAddress"></a>

```typescript
public readonly targetAddress: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCodestarnotificationsNotificationRuleTargets;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCodestarnotificationsNotificationRule.DataAwsccCodestarnotificationsNotificationRuleTargets">DataAwsccCodestarnotificationsNotificationRuleTargets</a>

---



